import {serverIncrement} from "../servers/servers.component";
import {ServerStatus} from "./serverStatus";

export class Server {
  id: number;
  name: string;
  status: ServerStatus;

  constructor(name: string) {
    this.id = serverIncrement;
    this.name = name;
    this.status = ServerStatus.offline;
  }
}
