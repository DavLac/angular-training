import {Component} from '@angular/core';
import {Server} from "../server/server";
import {ServerStatus} from "../server/serverStatus";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  servers: Server[] = [new Server('my-first-server', ServerStatus.online)];
  serverNameInput: string = '';

  onAddServerClick() {
    this.servers.push(new Server(this.serverNameInput));
    this.serverNameInput = '';
  };

  removeServerById(id: number) {
    this.servers.splice(this.servers.findIndex(e => e.id === id), 1);
  }

}
