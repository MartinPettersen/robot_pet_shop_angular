import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownmenuComponent } from "../../components/dropdownmenu/dropdownmenu.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, DropdownmenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
