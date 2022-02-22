const {serialize}=require("cookie")
export const setTokens = (req,res,{ accessToken, refreshToken, expiresIn }) => {
    const accessTokenExpiration = new Date();
    accessTokenExpiration.setSeconds(
      accessTokenExpiration.getSeconds() + expiresIn
    );
  
    req.cookies = {
      ...(accessToken && { ACCESS_TOKEN: accessToken }),
      ...(refreshToken && { REFRESH_TOKEN: refreshToken }),
    };
  
    res.setHeader("Set-Cookie", [
      serializeSecureCookie("ACCESS_TOKEN", accessToken, {
        expires: accessTokenExpiration,
      }),
      serializeSecureCookie("REFRESH_TOKEN", refreshToken),
    ]);
  };
  
  export const serializeSecureCookie = (key, value, options = {}) =>
    serialize(key, value, {
      ...options,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });