import { User } from "./types";
import { CustomJwtSessionClaims } from "@types/globals"

declare global {
  interface CustomJwtSessionClaims extends User {}
}