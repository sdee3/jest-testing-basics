const functions = require("./functions");

// Runs before / after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// Runs once:
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database initalized...");
// const closeDatabase = () => console.log("Database closed...");

const nameCheck = () => console.log("Checking name...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds two numbers (2+2) to equal another number (4)", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds two numbers (2+2) to not equal another number (5)", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
  // suprotno je not.toBeFalsy() ili toBeTruthy()
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy"
  });
});

// Funkcija koja ne postoji u functions.js fajlu
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regularni izrazi
test("There is no I in team", () => {
  expect("team").not.toMatch(/i/);
  // ne radi za veliko I, rešenje je /I/i
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async / Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
