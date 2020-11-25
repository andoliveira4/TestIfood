import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(resultado => {
        if (resultado.success) {
          alert('Login Realizado com Sucesso');
          this.router.navigate(['/listar']);
        } else {
          alert('O Login Falhou: ' + resultado.error);
          localStorage.removeItem('statusLogin');
          this.router.navigate(['/home']);
        }
      },
      error => {
        alert(error);
      });
    }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    if (confirm("Deseja Encerrar a Sessão?")) {
      localStorage.removeItem('statusLogin');
      this.router.navigate(['/home']);
    }
  }

}
