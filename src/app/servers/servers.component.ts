import {Component} from '@angular/core';
import {Server} from "../server/server";

export let serverIncrement = 0;

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  servers = []
  serverNameInput: string = '';

  onAddServerClick() {
    serverIncrement++;
    this.servers.push(new Server(this.serverNameInput));
    this.serverNameInput = '';
  };

}
