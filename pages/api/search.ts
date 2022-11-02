// pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getXataClient } from "../../util/xata";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const term = req.query.term as string;

  const records = await xata.search.all(term, {
    tables: [
      {
        table: "games",
        boosters: [{ numericBooster: { column: "totalRating", factor: 2 } }],
      },
    ],
    fuzziness: 0,
    prefix: "phrase",
  });

  res.status(200).json(records.map(r => r.record));
}
