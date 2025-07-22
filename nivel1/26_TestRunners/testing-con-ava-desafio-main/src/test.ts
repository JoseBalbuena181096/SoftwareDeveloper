import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});

test("Testeo la clase User y sus métodos", (t) => {
  // datos mockeados
  const user = new User("User 1");
  t.is(user.name, "User 1");
});
