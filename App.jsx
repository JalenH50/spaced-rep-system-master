import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function percentUnderstood(cards, modeNumber, counter) {
  // - The card updates the percent_correct value based on user feedback
  // Easy = 75%, Medium = 50%, Hard = 25%

  const response = await prisma.card.update({
    where: {
      id: cards[counter].id,  // Use `id` to identify the card
    },
    data: {
      percent_correct: modeNumber,  // Update the `percent_correct` field
    },
  });

  return response;
}

// Function to add a new card to the database
export async function addNewCard(question, answer) {
  const response = await prisma.card.create({
    data: {
      question: question,
      answer: answer,
      percent_correct: 0,
      next_review: new Date(),
    },
  });

  console.log(response);  // Log the response for debugging
  return response;
}
