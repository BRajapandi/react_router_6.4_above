import { useLoaderData, useNavigation } from "react-router-dom";

function Home() {
  const dogurl = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>Home</div>
      <div>{JSON.stringify(dogurl)}</div>
    </div>
  );
}
export default Home;

//we can able to access the params also if there is need
{
  /*
export const dataLoader = async ({params}) => {

  const {id}=params;
  const data = await fetch("https://random.dog/woof.jso");

  if (!data.ok) {
    throw new Error("Image not found");
  }
  const dog = await data.json();
  return dog.url;
};
*/
}
export const dataLoader = async () => {
  const data = await fetch("https://random.dog/woof.jso");

  if (!data.ok) {
    throw new Error("Image not found");
  }
  const dog = await data.json();
  return dog.url;
};
