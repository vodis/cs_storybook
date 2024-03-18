import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from "@shared/shared.module";
import {PopoverComponent} from "@shared/components/popover/popover.component";
import {WalletsProvider} from "@shared/components/network-switch/network.modal";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-network-switch',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule, SharedModule, PopoverComponent],
  templateUrl: 'network-switch.component.html',
  styleUrls: ['network-switch.component.scss'],
})
export class NetworkSwitchComponent {
  public chains: WalletsProvider[] = environment.chains;
  public isNetworkSwitchOpen = false;
  public selectedChain: WalletsProvider;

  constructor() {
    this.selectedChain = this.chains[0];
  }

  handleOpen(isOpen: boolean): void {
    this.isNetworkSwitchOpen = isOpen;
  }
}
