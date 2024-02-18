import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  ngOnInit(): void {
   console.log("Init called");
    // throw new Error('Method not implemented.');
  }

  allowNewServer: boolean = false;
  serverCreationStatusMsg:string = " ";
  serverName:string ="Not set";
  serverCreatedStatus:boolean = false;
  serverList:string[] =[];

  constructor()
  {
    setTimeout(() =>this.allowNewServer = true, 2000);
  }
 
  onAddNewServer()
  {
    this.serverCreationStatusMsg ="New Servers are getting Added , The Name of the Server is " + this.serverName;
    this.serverCreatedStatus = true;
   
}
onUpdateServerName(event: Event) 
{
  this.serverName = (<HTMLInputElement>event.target).value;
}

}