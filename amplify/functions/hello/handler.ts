// import type { Handler } from "aws-lambda";
import { Schema } from "../../data/resource";
import { env } from '$amplify/env/sayHello';
type handlerType = Schema['sayHello']['functionHandler'];

export const handler: handlerType = async(event, context) => {
    const region = env.AWS_REGION;
    const tableName = env.TABLE_NAME;
    const {name} = event.arguments;
    return `Hello, ${name}.  Viewing ${tableName} in ${region}!`
}