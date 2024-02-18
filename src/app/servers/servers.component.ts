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
  serverCreationStatus:string = " No Servers Created!!";
  serverName:string ="Not set";

  constructor()
  {
    setTimeout(() =>this.allowNewServer = true, 2000);
  }
 
  onAddNewServer()
  {
    this.serverCreationStatus ="New Servers are getting Added , The Name of the Server is " + this.serverName;

   
}
onUpdateServerName(event: Event) 
{
  this.serverName = (<HTMLInputElement>event.target).value;
}

}