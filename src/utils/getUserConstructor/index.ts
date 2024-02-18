import { decodeTokenParams } from "@utils";
import { Constants } from "@configurations";
import { TokenTypes } from "@types";

const getUserConstructor = (headers = ""): TokenTypes.IToken => {
  const token = headers.split(" ")[1];
  const data: TokenTypes.IToken = decodeTokenParams(
    token,
    Constants.ACCESS_TOKEN_SECRET,
  ) as TokenTypes.IToken;

  return {
    uid: data?.uid,
    releaseTime: data?.releaseTime,
  };
};

export { getUserConstructor };
