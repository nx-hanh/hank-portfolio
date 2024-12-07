import { env } from '@/env.mjs';

/*
 * Reads the JSON file inside of the gist
 */
async function getData() {
  const GIST_ID = env.USER_INFO_GIST_ID;
  const GIST_FILENAME = env.USER_INFO_GIST_FILENAME;
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

export { getData };
