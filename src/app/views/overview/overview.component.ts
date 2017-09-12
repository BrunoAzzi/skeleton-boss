import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayName = '';
  accountList: FirebaseListObservable<Account[]>;
  accountBalance = 2300;

  single = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];

  view: any[] = [450, 250];
  view1: any[] = [450, 250];
  view2: any[] = [250, 150];
  view3: any[] = [550, 150];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private service: AuthService,
  ) {}

  ngOnInit() {
    this.service.getUser().subscribe( user => {
      this.displayName = user.displayName;
    });
  }
}
