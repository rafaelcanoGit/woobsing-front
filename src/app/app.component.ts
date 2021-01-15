import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from './interfaces/usuario';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'woobsing-front-angular';
  usuarios: Usuario[];
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: ''
  };
  edita = false;
  usuario_id: any;
  constructor(private usuarioService: UsuariosService, private httpClient: HttpClient, private route: ActivatedRoute ) {
      this.getUsuarios()
   }
  ngOnInit(): void {
  }
  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe( (data: Usuario[]) => {
      this.usuarios = data
    },(error) => {
      console.log(error)
      alert('Ocuarrió un error')
    })
  }
  registro(){
    this.usuarioService.registro(this.usuario).subscribe(data => {
      console.log(data)
      alert('Usuario Guardado')
      this.getUsuarios()
      this.limpiar()
    },(error) => {
      console.log(error)
      alert('Ocurrió un error')
    })
  }
  editar(){
    this.usuarioService.editar(this.usuario).subscribe(data => {
      alert('Usuario Actualizado')
      this.getUsuarios()
      this.limpiar()
    },(error) => {
      console.log(error)
      alert('Ocurrió un error')
    })
  }
  eliminar(usuario: Usuario){
    this.usuarioService.eliminar(usuario).subscribe(data => {
      alert('Usuario Eliminado')
      this.getUsuarios()
      this.limpiar()
    },(error) => {
      console.log(error)
      alert('Ocurrió un error')
    })
  }
  editando(usuario: Usuario){
    this.usuario = usuario
    this.edita = true
  }
  cancelar () {
    this.edita = false
    this.limpiar()
  }
  limpiar(){
    this.usuario = {
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      direccion: ''
    }
    this.edita = false
  }
}
