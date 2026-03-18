import { getInput, setFailed } from "@actions/core";

try {
  const name = getInput("name");
  console.log(`Hello ${name}`);
} catch (error) {
  setFailed(error.message);
}
