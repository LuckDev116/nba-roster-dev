import players from "../../data/players.json";

export default function handler(req, res) {
  res.status(200).json(players);
}
