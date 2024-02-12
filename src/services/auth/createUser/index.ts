import { client } from "@configurations";
import { AuthTypes } from "@types";
import { v4 as uuidv4 } from "uuid";
import { TablesEnum } from "@enums";
import { encodeHash } from "@utils";
import * as process from "process";

const createUser = async (
  login: string,
  password: string,
): Promise<boolean> => {
  const processedLogin = login.trim();
  const processedPassword = password.trim();
  const hashPassword = await encodeHash(
    processedPassword,
    Number(process.env.HASH_ROUND),
  );
  const newUserData: AuthTypes.IUser = {
    login: processedLogin,
    password: hashPassword,
    registrationTime: Date.now(),
    uid: uuidv4(),
  };
  const processedNewUserData = JSON.stringify(newUserData);
  await client.set(newUserData.uid, processedNewUserData);
  const tableData = {
    login: processedLogin,
    uid: newUserData.uid,
  };
  const processedTableData = JSON.stringify(tableData);
  await client.rPush(TablesEnum.USERS, processedTableData);
  return true;
};

export { createUser };
