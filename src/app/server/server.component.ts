import {Component, Input} from '@angular/core';
import {ServerStatus} from "./serverStatus";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() status: ServerStatus;

  getServerStatus = (index: number) => ServerStatus[index];

  onClickChangeStatus () {
    if(this.status === ServerStatus.offline) {
      this.status = ServerStatus.online;
    } else {
      this.status = ServerStatus.offline;
    }
  }
}
