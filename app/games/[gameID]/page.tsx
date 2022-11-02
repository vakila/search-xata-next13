import { getXataClient } from "../../../util/xata"; // or the path you chose during 'xata init'

const xata = getXataClient();

export default async function Page({ params }: { params: { gameID: string } }) {
  const game = await xata.db.games.read(params.gameID);

  if (!game) return <h1>Game not found</h1>;

  return (
    <main style={{ padding: "0px 2rem" }}>
      <h1>{game.name}</h1>
      {game.cover && <img src={game.cover} />}
      <p>{game.summary}</p>
      <p>{game.console}</p>
    </main>
  );
}
