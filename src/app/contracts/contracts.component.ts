import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css'],
})
export class ContractsComponent implements OnInit {
  client: string = 'Melisa';
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
