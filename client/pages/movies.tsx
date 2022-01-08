import type { NextPage } from "next"
import { useQuery } from "react-query"
import Show from "../components/Show"
import { ShowType } from "../types";

const Movies: NextPage<any> = () => {
  const { data } = useQuery(
    "shows",
    async () =>
      await fetch(`https://61d8b7d2e6744d0017ba8c4e.mockapi.io/items`).then((result) =>
        result.json()
      )
  );
  console.log(data);
  return (
    <>
      {
        data 
          && data.map((item: ShowType) => (
          <Show title={item.title} description={item.description} releaseYear={item.releaseYear} images={item.images} programType={item.programType} />
        ))
      }
    </>
  );
}

export default Movies;