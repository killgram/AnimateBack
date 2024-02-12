import bcrypt from "bcrypt";

const encodeHash = async (value: string, round: number) => {
  const salt = await bcrypt.genSalt(round);

  return await bcrypt.hash(value, salt);
};

const compareHash = async (value: string, hashValue: string) => {
  return await bcrypt.compare(value, hashValue);
};

export { encodeHash, compareHash };
