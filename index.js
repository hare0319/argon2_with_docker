import * as Argon from "argon2";

const getHashStr = (raw) => Argon.hash(raw);

const verifyHashStr = (raw, hash) => Argon.verify(hash, raw);

(async () => {
  try {
    const word = "Aloha";
    const hashed = await getHashStr(word);
    const isPass = await verifyHashStr(word, hashed);

    console.log({ hashed, isPass });
  } catch (err) {
    console.error(err);
  }
})();
