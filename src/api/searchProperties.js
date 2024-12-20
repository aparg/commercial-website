import { commercial } from "./routes/fetchRoutes";

export const searchProperties = async (inputValue) => {
  const response = await fetch(
    commercial.properties.replace("$query", "?$search=") + inputValue
  );
  const searchedProperties = await response.json();
  return searchedProperties.results;
};
