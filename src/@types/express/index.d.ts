//Sobrepondo objeto Request

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
