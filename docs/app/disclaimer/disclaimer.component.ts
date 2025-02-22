import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss'
})
export class DisclaimerComponent implements OnInit {

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
