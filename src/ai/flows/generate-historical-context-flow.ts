'use server';
/**
 * @fileOverview A Genkit flow for generating objective historical context about 12th-century Portugal,
 * with a focus on the Beira region, for a family history website.
 *
 * - generateHistoricalContext - A function that handles the generation of historical context.
 * - GenerateHistoricalContextInput - The input type for the generateHistoricalContext function.
 * - GenerateHistoricalContextOutput - The return type for the generateHistoricalContext function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHistoricalContextInputSchema = z
  .object({})
  .describe(
    'Input schema for generating historical context. Currently empty as the context is fixed.'
  );
export type GenerateHistoricalContextInput = z.infer<
  typeof GenerateHistoricalContextInputSchema
>;

const GenerateHistoricalContextOutputSchema = z
  .string()
  .describe(
    'A rich, objective historical context about 12th-century Portugal, specifically the Beira region.'
  );
export type GenerateHistoricalContextOutput = z.infer<
  typeof GenerateHistoricalContextOutputSchema
>;

export async function generateHistoricalContext(
  input: GenerateHistoricalContextInput
): Promise<GenerateHistoricalContextOutput> {
  return generateHistoricalContextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHistoricalContextPrompt',
  input: {schema: GenerateHistoricalContextInputSchema},
  output: {schema: GenerateHistoricalContextOutputSchema},
  prompt: `Você é um historiador especialista em Portugal medieval. Crie um texto objetivo e rico em detalhes históricos sobre o século XII em Portugal, com foco particular na região da Beira. O objetivo é fornecer um pano de fundo geral e contexto geográfico da época para um site de história familiar, sem inventar quaisquer detalhes específicos ou fictícios sobre a história de uma família em particular. O texto deve ter entre 300 e 500 palavras e ser escrito em português.

Foque em aspectos como a situação política, social, econômica, cultural e as características geográficas da região da Beira no século XII.`,
});

const generateHistoricalContextFlow = ai.defineFlow(
  {
    name: 'generateHistoricalContextFlow',
    inputSchema: GenerateHistoricalContextInputSchema,
    outputSchema: GenerateHistoricalContextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
