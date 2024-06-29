import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'dc0c016d857de7c90bbfd102768a31623b63f389', queries });
export default client;
  