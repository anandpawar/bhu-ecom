import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navBarClassName: string = '';

  constructor() { }

  ngOnInit() {
    window.addEventListener("scroll", this.handleScroll);
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY > 20) {
      this.navBarClassName = "scrolled";
    } else {
      this.navBarClassName = ""
    }
  };

}
