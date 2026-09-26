import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import {
  createSiteSelectionModel,
  getGatewayRunId,
  withGatewayRunId,
} from "@/lib/ai-gateway.server";

const systemPrompt = `You are the AI site-selection advisor for the Data Center Cooling and Energy Efficiency Lab.

Help visitors identify suitable regions in Pakistan for a planned data center. Ask concise follow-up questions when important requirements are missing. Evaluate options using power availability and reliability, energy cost, renewable potential, climate and cooling demand, connectivity, water availability, land and infrastructure readiness, resilience, sustainability, and room to scale.

Never assume or declare that a particular city is universally best, highest, or the project's target. Recommendations must be conditional on the visitor's stated requirements and available evidence. Prefer region-level comparisons. Clearly separate known inputs, assumptions, recommended options, tradeoffs, risks, and data that still needs verification. Do not invent live utility tariffs, grid capacity, land availability, or regulatory approvals. Keep explanations practical, professional, and understandable rather than deeply technical.`;

function safeErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) return error.message;
  return "The recommendation could not be completed. Please try again later.";
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return Response.json(
            { error: "The AI recommendation service is not configured." },
            { status: 401 },
          );
        }

        try {
          const body = (await request.json()) as { messages?: UIMessage[] };
          if (!Array.isArray(body.messages) || body.messages.length === 0) {
            return Response.json({ error: "Please describe your site requirements." }, { status: 400 });
          }

          const gateway = createSiteSelectionModel(key, getGatewayRunId(request));
          const result = streamText({
            model: gateway.model,
            system: systemPrompt,
            messages: await convertToModelMessages(body.messages),
            abortSignal: request.signal,
            maxRetries: 0,
            providerOptions: {
              openai: {
                forceReasoning: true,
                reasoningEffort: "medium",
                reasoningSummary: "auto",
                store: false,
                include: ["reasoning.encrypted_content"],
              },
            },
          });

          const response = result.toUIMessageStreamResponse({
            originalMessages: body.messages,
            sendReasoning: true,
            onError: safeErrorMessage,
          });
          return withGatewayRunId(response, gateway);
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return new Response(null, { status: 499 });
          }
          return Response.json({ error: safeErrorMessage(error) }, { status: 500 });
        }
      },
    },
  },
});