import { Usuario as TUsuario } from "../api/usuario/Usuario";

export const USUARIO_TITLE_FIELD = "apellido";

export const UsuarioTitle = (record: TUsuario): string => {
  return record.apellido?.toString() || String(record.id);
};
