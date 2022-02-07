import { Injectable } from '@angular/core';
import { Roles } from './roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private roles = new Set<Roles>();

  constructor() { 
    this.roles.add(Roles.LAZY_ONE);
    this.roles.add(Roles.LAZY_TWO);
  }

  addRole(role:Roles){
    this.roles.add(role);
  }

  removeRole(role:Roles){
    this.roles.delete(role);
  }

  listRoles(){
    return this.roles.keys();
  }

  hasRoles(roles:Roles[]){
    return roles.every((role)=>this.roles.has(role))
  }

}
