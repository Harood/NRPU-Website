"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Bot, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "dcce-site-selection-conversation";
const suggestions = [
  "Compare regions for a 20 MW AI data center with renewable power priority.",
  "Recommend options where cooling efficiency and water constraints matter most.",
  "What information do you need before comparing suitable regions?",
];

function loadMessages(): UIMessage[] {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as UIMessage[]) : [];
  } catch {
    return [];
  }
}

export function SiteRecommendationAssistant() {
  const [input, setInput] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, setMessages, status, error, stop } = useChat({
    id: "site-selection",
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    setMessages(loadMessages());
    setHydrated(true);
    textareaRef.current?.focus();
  }, [setMessages]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    if (status === "ready" || status === "error") textareaRef.current?.focus();
  }, [hydrated, messages, status]);

  const submit = (message: PromptInputMessage) => {
    const text = message.text.trim();
    if (!text) return;
    void sendMessage({ text });
    setInput("");
  };

  const reset = () => {
    stop();
    setMessages([]);
    window.localStorage.removeItem(STORAGE_KEY);
    textareaRef.current?.focus();
  };

  return (
    <div className="advisor-shell">
      <div className="advisor-head">
        <div className="advisor-identity">
          <span className="advisor-mark" aria-hidden="true"><Bot size={22} /></span>
          <div><strong>Regional Site Advisor</strong><span>AI-powered decision support</span></div>
        </div>
        <Button aria-label="Clear conversation" title="Clear conversation" variant="ghost" size="icon" onClick={reset}>
          <RotateCcw />
        </Button>
      </div>

      <Conversation className="advisor-conversation">
        <ConversationContent className="advisor-messages">
          {messages.length === 0 ? (
            <ConversationEmptyState
              className="advisor-empty"
              icon={<Bot size={30} />}
              title="Describe your planned data center"
              description="Include power demand, workload, cooling priorities, sustainability goals, budget, and expansion needs."
            >
              <div className="advisor-suggestions">
                {suggestions.map((suggestion) => (
                  <Button key={suggestion} type="button" variant="outline" onClick={() => void sendMessage({ text: suggestion })}>
                    {suggestion}
                  </Button>
                ))}
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return <MessageResponse key={`${message.id}-${index}`}>{part.text}</MessageResponse>;
                    }
                    if (part.type === "reasoning" && part.text) {
                      return <details className="advisor-reasoning" key={`${message.id}-${index}`}><summary>Analysis</summary><p>{part.text}</p></details>;
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && <Shimmer className="advisor-thinking">Evaluating your requirements...</Shimmer>}
          {error && <p className="advisor-error" role="alert">{error.message}</p>}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput className="advisor-input" onSubmit={submit}>
        <PromptInputTextarea
          ref={textareaRef}
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          placeholder="Describe power, workload, cooling, connectivity, budget, and growth needs..."
          disabled={status === "submitted" || status === "streaming"}
        />
        <PromptInputFooter className="justify-end">
          <PromptInputSubmit
            status={status}
            disabled={!input.trim() && status !== "streaming"}
            onStop={stop}
          />
        </PromptInputFooter>
      </PromptInput>
      <p className="advisor-note">Recommendations are planning guidance. Validate current utility, land, climate, and regulatory data before investment.</p>
    </div>
  );
}