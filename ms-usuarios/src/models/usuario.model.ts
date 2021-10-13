import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdUsuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombresUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  DocumentoUsuario: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaNacimientoUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  DireccionUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularUsuario: string;

  @property({
    type: 'string',
    default: 0,
  })
  TelefonoUsuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoUsuario: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
