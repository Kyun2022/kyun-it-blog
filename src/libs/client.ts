import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "kyun-it-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.API_KEY,
  // retry: true // Retry attempts up to a maximum of two times.
});

export default client;
