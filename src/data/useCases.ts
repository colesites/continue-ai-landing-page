export interface UseCase {
  id: string;
  title: string;
  description: string;
}

export const useCases: UseCase[] = [
  {
    id: "out-of-tokens",
    title: "Out of tokens / message limits",
    description:
      "Hit a limit on one platform? Switch models instantly and keep going.",
  },
  {
    id: "hallucinations",
    title: "AI hallucinations",
    description:
      "Cross-check answers with another model in one click. Compare responses side-by-side.",
  },
  {
    id: "best-model",
    title: '"This model is good at X"',
    description:
      "Use the best model for the job: Code + debugging, Research + citations, Creative writing, Math/logic reasoning, Fast summarization.",
  },
  {
    id: "study-assignments",
    title: "Study & assignments",
    description:
      "Import your old learning chats and continue from where you stopped — with a better model when needed.",
  },
  {
    id: "client-work",
    title: "Client work",
    description:
      "Keep project chats organized by client, and switch models depending on task complexity.",
  },
  {
    id: "content-creation",
    title: "Content creation",
    description:
      "Generate ideas with one model, rewrite with another, verify facts with another — without leaving your workspace.",
  },
];
