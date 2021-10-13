import {Entity, model, property} from '@loopback/repository';

@model()
export class RolesUsuarios extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  IdUsuario: number;

  @property({
    type: 'number',
    required: true,
  })
  IdRol: number;

  @property({
    type: 'object',
    required: true,
  })
  RolUsuario: object;


  constructor(data?: Partial<RolesUsuarios>) {
    super(data);
  }
}

export interface RolesUsuariosRelations {
  // describe navigational properties here
}

export type RolesUsuariosWithRelations = RolesUsuarios & RolesUsuariosRelations;
