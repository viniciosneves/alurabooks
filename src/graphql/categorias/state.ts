import { makeVar } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";

export const categoriasVar = makeVar<ICategoria[]>([])