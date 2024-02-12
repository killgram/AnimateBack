import { client } from "@configurations";
import { AuthTypes } from "@types";
import { compareHash, generateAccessToken } from "@utils";
import * as process from "process";
import { TablesEnum } from "@enums";

const getUser = async (
  login: string,
  password: string,
): Promise<AuthTypes.ISignIn> => {
  const processToken = process.env.ACCESS_TOKEN_SECRET ?? "";
  const processedLogin = login.trim();
  const processedPassword = password.trim();
  const users = await client.lRange(TablesEnum.USERS, 0, -1);
  const user = users.filter((v) => {
    const processedUser = JSON.parse(v);
    return processedUser?.login === processedLogin;
  })?.[0];
  if (!user) {
    return {
      isError: true,
    };
  }
  const processedUser = JSON.parse(user);
  const userUid = processedUser?.uid;
  const userData = await client.get(userUid);
  if (userData === null) {
    return {
      isError: true,
    };
  }
  const processedUserData = JSON.parse(userData);
  const isPassword = await compareHash(
    processedPassword,
    processedUserData?.password,
  );
  if (!isPassword) {
    return {
      isError: true,
    };
  }
  const secureData = {
    uid: processedUserData?.uid,
    releaseTime: Date.now(),
  };
  const accessToken = generateAccessToken(secureData, processToken);

  return {
    isError: false,
    accessToken: accessToken,
  };
};

export { getUser };
