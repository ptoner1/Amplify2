import { defineFunction } from "@aws-amplify/backend";

export const sayHello = defineFunction({
    name: 'sayHello',
    entry: './handler.ts',
    bundling: {
        minify: false
    }
    // handler: "index.handler",
    // events: [
    //     {
    //         http: {
    //             method: "get",
    //             path: "/hello",
    //         },
    //     },
    // ],
});