import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type TChatbotContext = {
  messageHistory: Record<string, InMemoryChatMessageHistory> | undefined;
  setMessageHistory: Dispatch<
    SetStateAction<Record<string, InMemoryChatMessageHistory> | undefined>
  >;
  sessionId: string | undefined;
  setSessionId: Dispatch<SetStateAction<string | undefined>>;
  newUserInput: string | undefined;
  setUserInput: Dispatch<SetStateAction<string | undefined>>;
  locationInput: string | number | undefined;
  setLocationInput: Dispatch<SetStateAction<string | number | undefined>>;
};

const ChatbotContext = createContext<TChatbotContext | undefined>(undefined);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [newUserInput, setUserInput] = useState<string | undefined>(undefined);
  const [locationInput, setLocationInput] = useState<string | number | undefined>(undefined);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [messageHistory, setMessageHistory] = useState<
    Record<string, InMemoryChatMessageHistory> | undefined
  >(undefined);
  return (
    <ChatbotContext.Provider
      value={{
        newUserInput,
        setUserInput,
        locationInput,
        setLocationInput,
        sessionId,
        setSessionId,
        messageHistory,
        setMessageHistory,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error("Please use 'useChatbot' hook within ChatbotContext scope.");
  }
  return context;
};
