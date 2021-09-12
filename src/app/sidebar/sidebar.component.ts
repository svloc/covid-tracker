import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.isCollapsed = !this.isCollapsed;
  }



}
