import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {ListenToClickOutsideDirective} from "@directives/click-outside/listen-to-click-outside.directive";

const AngularMaterial = [MatTooltipModule, MatButtonModule, MatIconModule];

const directives = [ListenToClickOutsideDirective];

@NgModule({
  imports: [...AngularMaterial, CommonModule],
  declarations: [...directives],
  providers: [],
  exports: [...AngularMaterial, ...directives, CommonModule],
})
export class SharedModule {}
