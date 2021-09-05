import { fetchData } from "./fetch.js";

describe("scoped area inside a file", () => {
  let data = null;
  beforeAll(async () => {
    const res = await fetchData();
    data = res;
    console.log(data);
  });
  test("check data", () => {
    console.log(data);
    expect(data).toBeTruthy();
  });
  test("check user", () => {
    expect(data).toHaveProperty("user");
  });
});