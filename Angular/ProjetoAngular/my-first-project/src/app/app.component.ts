import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    count = 0;
    name = "Claudemir Albuquerque";
    text = "";

    pessoas = [
      {
          nome: "Claudemir",
          sobrenome: "Albuquerque"
      },
      {
          nome: "Natalie",
          sobrenome: "Albuquerque"
      },
      {
        nome: "Natália",
        sobrenome: "Albuquerque"
      },
      {
          nome: "Bela",
          sobrenome: "Albuquerque"
      }
    ];

    construtor(){

    }

    ngOnInit() {
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10) {
          clearInterval(interval)
        }
      },1000)
    }

    clicou(nome: string): void {
        console.log('Clicou em mim', nome);
    }
}
