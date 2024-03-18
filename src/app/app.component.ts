import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "@shared/shared.module";
import { NetworkSwitchComponent } from "@shared/components/network-switch/network-switch.component";
import { PopoverComponent } from "@shared/components/popover/popover.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, NetworkSwitchComponent, PopoverComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'angular-latest';
}
