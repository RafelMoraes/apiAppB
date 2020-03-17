import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Para paginação
  public page = 1;
  public totalPaginas = 0;

  public totalUsuarios = 0;
  public usuariosPagina = 0;

  //Para guardar a lista de Usuarios
  public listaUsuarios = [];


  constructor(private usersService: UserService) {
    this.buscaUsuarios(this.page);
  }

  public buscaUsuarios(pagina: Number){
    this.usersService.listaUsuarios(pagina).subscribe(dados =>{
      this.page = dados['page'];
      this.totalPaginas = dados['total_pages'];
      
      this.usuariosPagina = dados['per_page'];
      this.totalUsuarios = dados['total'];

      this.listaUsuarios = dados['data'];

    });
  }


}
