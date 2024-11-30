const GIST_ID = 'd717b4db92be677b44cded7b422b0e3c';
const GIST_FILENAME = 'nx-hanh.json';

/*
 * Reads the JSON file inside of the gist
 */
async function getData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

export { getData };
