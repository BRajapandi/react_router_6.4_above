import { useSearchParams } from "react-router-dom";

function SearchParams() {
  const [searchparams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>SearchParams {searchparams.get("name")}</div>
      <h5
        onClick={() => {
          setSearchParams({ name: "pandi" });
        }}
      >
        SetParams
      </h5>
    </>
  );
}
export default SearchParams;
