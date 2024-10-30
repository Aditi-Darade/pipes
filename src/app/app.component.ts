import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name = "";
  date = "";
  amount = 0; //Don't know how else to declare the variable amount of type integer
  onNameChange(value: string)
  {
    this.name = value;
  }

  onDateChange(value: string)
  {
    this.date = value;
  }

  onAmountChange(value: string)
  {
    this.amount = parseFloat(value);
  }
}
