import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from "./components/usuario/usuario.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, UsuarioComponent]
})
export class AppComponent {
  title = 'ng-crud-usuario';
}
