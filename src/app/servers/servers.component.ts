import {Component} from '@angular/core';
import {Server} from "../server/server";
import {ServerStatus} from "../server/serverStatus";
import {LoggingService} from "./logging.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  providers: [LoggingService]
})
export class ServersComponent {
  servers: Server[] = [new Server('my-first-server', ServerStatus.online)];
  serverNameInput: string = '';


  constructor(private loggingService: LoggingService) {}

  onAddServerClick() {
    this.loggingService.log("add");
    this.servers.push(new Server(this.serverNameInput));
    this.serverNameInput = '';
  };

  updateServerData(server: Server) {
    this.loggingService.log("remove");
    const index = this.servers.findIndex(e => e.id === server.id);
    this.servers[index] = server;
    console.log(this.servers);
  }

  removeServerById(id: number) {
    this.loggingService.log("remove");
    this.servers.splice(this.servers.findIndex(e => e.id === id), 1);
  }

}
