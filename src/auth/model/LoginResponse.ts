// src/auth/model/LoginResponse.ts
export interface LoginResponse {
  token: string;
}

// Interfaz para los datos decodificados del token JWT
export interface DecodedToken {
  sub: string;    // username
  dni: string;
  email: string;
  roles: string[];
  iat: number;    // issued at
  exp: number;    // expiration time
}