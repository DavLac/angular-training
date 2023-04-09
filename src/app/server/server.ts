import {ServerStatus} from "./serverStatus";

let serverIncrement = 0;

export class Server {
  id: number;
  name: string;
  status: ServerStatus;

  constructor(name: string, status?: ServerStatus) {
    this.id = serverIncrement++;
    this.name = name;
    if (status === undefined) {
      this.status = ServerStatus.offline;
    } else {
      this.status = status;
    }
  }
}
