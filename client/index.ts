import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  // Create User
  // const createdUser = await trpc.userCreate.mutate({
  //   name: "Test1",
  //   email: "test1@test.com",
  // });
  // console.log("Created user:", createdUser);
  // List User
  const userList = await trpc.userList.query();
  console.log(userList);
}

main();
