import { makeSchema, objectType, queryType } from "nexus";
import { join } from "path";
import * as types from "./graphql";

// const Query = queryType({
//   definition(t) {
//     t.list.field("posts", {
//       type: "Post",
//       resolve: () => [
//         {
//           id: 1,
//           title: "first post",
//           body: "hello apollo server",
//         },
//       ],
//     });
//   },
// });

// const Post = objectType({
//   name: "Post",
//   definition(t) {
//     t.id("id");
//     t.string("title");
//     t.string("body");
//   },
// });
export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "..", "nexus-typegen.ts"),
    schema: join(__dirname, "..", "schema.graphql"),
  },
  contextType: {
    module: join(__dirname, "./context.ts"),
    export: "Context",
  },
});
