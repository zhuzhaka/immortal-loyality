import { ITokenService } from "./types";

class _TokenService implements ITokenService {
  constructor(accessSecret = null, refreshSecret = null) {
    this.accessSecret = accessSecret;
    this.refreshSecret = refreshSecret;
  }
  accessSecret: String;
  refreshSecret: String;
  generateTokens(payload: Object) {
    throw new Error("Method not implemented.");
  }
}
