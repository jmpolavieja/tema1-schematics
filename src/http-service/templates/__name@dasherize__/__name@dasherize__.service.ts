import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// El BASE URL de la API Rest a la que ataca el servicio
const BASE_URL = '<%= url %>';

// TODO: Debes rellenar la interface del tipo de datos o usar una propia
export interface <%= classify(object) %> {
    primeraPropiedad: string;
    /**
     * ...Añade tus propiedades
    */
}

@Injectable(
    {
        provideIn: 'root'
    }
)
export class <%= classify(name) %>HttpService{

    constructor(private http: HttpClient){}

    /**
     * Método para obtener todos los elementos de
     */
    findAll():Observable<<%= classify(object)%>[]>{
        return this.http.get<<%= classify(object) %>[]> (BASE_URL);
    }


    <% if(findOneByID) { %>

    /**
     * Método para OBTENER UN ELEMENTO POR ID
     */
    
    findByID(id: string): Observable<<%= classify(object)%>>{
        return this.http.get<<%= classify(object) %>>(`${BASE_URL}/${id}`);
    }

    <% } %>
}
