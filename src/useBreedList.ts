// import { useState, useEffect } from "react";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesTypes";

// const localCache = {};

export default function useBreedList(animal: Animal) {
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatuse] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatuse("loading");

  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     )

  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatuse("loaded");
  //   }
  // }, [animal]);

  // return [breedList, status];

  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
