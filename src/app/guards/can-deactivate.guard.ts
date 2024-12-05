// src/app/guards/can-deactivate.guard.ts

import { Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router'; // Usamos CanDeactivateFn para definir el tipo de guard
import { CanComponentDeactivate } from './can-component-deactivate.interface'; // Importamos la interfaz
import { Observable } from 'rxjs'; // Importa Observable desde RxJS


// Creamos el guard que implementa CanDeactivateFn
export const CanDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component, currentRoute, currentState, nextState
): boolean | Observable<boolean> | Promise<boolean> => {

  if (component && component.canDeactivate) {
    return component.canDeactivate(); // Llamamos al método canDeactivate del componente
  }
  
  // Si el componente no tiene el método canDeactivate, permitimos la navegación
  return true;
};
