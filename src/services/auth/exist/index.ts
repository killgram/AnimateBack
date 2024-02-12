import { client } from "@configurations";
import { TablesEnum } from "@enums";

const isExist = async (login: string): Promise<boolean> => {
  const processedLogin = login.trim();
  const users = await client.lRange(TablesEnum.USERS, 0, -1);
  const isExist = users.filter((v) => {
    const processedUser = JSON.parse(v);
    return processedUser?.login === processedLogin;
  })?.[0];
  return isExist !== undefined;
};

export { isExist };
