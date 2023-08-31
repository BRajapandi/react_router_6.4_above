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

export const dataLoader = async () => {
  const data = await fetch("https://random.dog/woof.json");
  const dog = await data.json();
  return dog.url;
};
