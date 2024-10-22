import React from "react";



{/* Aqui va el FORMULARIO*/}
export const Formulario = () => {
    return (
        <div class=" p-6 is-size-1-desktop is-size-1-mobile is-transparent has-shadow has-background-dark box" id="formulario">
        <div class="field is-warning is-rounded">
            <h1 class="title has-text-centered">¡Bienvenido!</h1>
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" placeholder="Juan Pérez" id="nombre" required/>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="juan.perez@example.com" id="correo" required />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success" id="email-veri">Este email esta disponible</p>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Jp2024!Segura" id="contraseña" required/>
              <span class="icon is-small is-left">
                <i class="fa-solid fa-key"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">Esta contraseña es invalida</p>
          </div>

        

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question" required/>
                Si  
              </label>
              <label class="radio">
                <input type="radio" name="question" required/>
                No  
              </label>
            </div>
  </div>
  
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" id="submit" type="submit" >Enviar</button>
      
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancelar</button>
    </div>
  </div>
</div>
    )
}


{/*Abajo puedes Poner el css para mantener el orden del codigo*/}