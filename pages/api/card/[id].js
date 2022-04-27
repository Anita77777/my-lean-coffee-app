import { getCards } from "../../../src/services/get-cards";

export default function handler(request, response) {
  const { id } = request.query.id;

  const cards = getCards();

  if (request.method === "Delete") {
    response.status(200).json({ message: "card deleted", card: singleCard });
  } else if (request.method === "PUT") {
    const changedCard = JSON.parserequest.body;

    response.status(200).json({ message: "card deleted", card: singleCard });
  } else {
    response.status(200).json(singleCard);
  }

  const singleCard = cards.find((card) => card.id === id);

  response.status(200).json(singleCard);
}
