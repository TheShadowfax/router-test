import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  consoleText = 'Loaded Home Component';

  addNewLine(line: string){
    this.consoleText+=`\n${line}`;
  }

  clear(){
    this.consoleText = '';
  }

}
