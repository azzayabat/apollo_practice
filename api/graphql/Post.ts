import { KnownTypeNamesRule } from "graphql";
import {
  objectType,
  extendType,
  nonNull,
  stringArg,
  nullable,
  intArg,
} from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.int("id");
    t.string("title");
    t.string("body");
    t.boolean("published");
  },
});

export const Get = objectType({
  name: "Get",
  definition(t) {
    t.int("id");
    t.int("age");
    t.string("name");
    t.int("phone");
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("get", {
      type: "Get",
      resolve(_root, _args, ctx) {
        return ctx.db.posts;
      },
    });

    t.nonNull.list.field("hey", {
      type: "Post",
      resolve(_, args, ctx) {
        return ctx.db.posts;
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: "Get",
      args: {
        id: nonNull(intArg()),
        age: nullable(intArg()),
        name: nullable(stringArg()),
      },
      resolve(_root, _args, ctx) {
        const draft: any = {
          id: _args.id,
          age: _args.age,
          name: _args.name,
        };

        console.log("_args", _args);
        console.log("ctx", ctx);

        ctx.db.posts.push(draft);
        return draft;
      },
    });

    t.field("createPost", {
      type: "Post",
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
        id: intArg(),
      },
      resolve(_, _args, ctx) {
        let post: any = {
          title: _args.title,
          id: _args.id,
          body: _args.body,
          published: true,
        };
        ctx.db.posts.push(post);
        return post;
      },
    });
  },
});
