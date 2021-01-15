import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_ENDPOINT: 'http://localhost:8000/api/usuarios';

  constructor(private httpClient: HttpClient) { 

  }
  getUsuarios(){
    return this.httpClient.get('http://localhost:8000/api/usuarios')
  }
  registro(usuario: Usuario){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.httpClient.post('http://127.0.0.1:8000/api/usuarios', usuario, {headers: headers})
  }
  editar(usuario: Usuario){
    const headers = new HttpHeaders({
    'Access-Control-Allow-Headers' :'Content-Type' ,
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/api/usuarios',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'})
    return this.httpClient.put('http://127.0.0.1:8000/api/usuarios/' + usuario.usuario_id, usuario, { headers })
  }
  eliminar(usuario: Usuario){
   return this.httpClient.delete('http://127.0.0.1:8000/api/usuarios/' + usuario.usuario_id)
  }
}
