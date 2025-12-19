export interface Attachment {
  mimeType: string;
  data: string;
}

export interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: number;
  attachments?: Attachment[];
  isStreaming?: boolean;
}
