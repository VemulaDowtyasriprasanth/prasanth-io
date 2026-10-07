export interface Certification {
  title: string;
  issuer: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Long-Term Agentic Memory With LangGraph',
    issuer: 'DeepLearning.AI',
    credentialUrl: 'https://learn.deeplearning.ai/accomplishments/f4df53fe-04d3-476a-af41-d6f38c48b3d3',
  },
  {
    title: 'Building Agentic RAG with LlamaIndex',
    issuer: 'DeepLearning.AI',
    credentialUrl: 'https://learn.deeplearning.ai/accomplishments/d5e971f1-5cac-4fc1-bdca-5686c0efd16f',
  },
  {
    title: 'Serverless LLM Apps Amazon Bedrock',
    issuer: 'DeepLearning.AI',
    credentialUrl: 'https://learn.deeplearning.ai/accomplishments/589b44d8-9317-44ef-a66f-f1ec99d22043',
  },
  {
    title: 'JavaScript RAG Web Apps with LlamaIndex',
    issuer: 'DeepLearning.AI',
    credentialUrl: 'https://learn.deeplearning.ai/accomplishments/22fdcad6-93b2-4446-a29b-7002bde9a8d9',
  },
];
