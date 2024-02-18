import jwt from "jsonwebtoken";

const generateAccessToken = (data: object, accessToken: string): string => {
  return jwt.sign(data, accessToken);
};

const verifyAccessToken = (
  token: string,
  accessToken: string,
): boolean | void => {
  return jwt.verify(token, accessToken, (err) => {
    return !err;
  });
};

const decodeTokenParams = (token: string, accessToken: string) => {
  return jwt.verify(token, accessToken);
};

export { generateAccessToken, verifyAccessToken, decodeTokenParams };
