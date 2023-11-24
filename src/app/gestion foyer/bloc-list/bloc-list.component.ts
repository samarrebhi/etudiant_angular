// bloc-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BlocService } from '../../services/bloc.service';
import {Bloc} from "../../models/Bloc";


@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css'],
})
export class BlocListComponent implements OnInit {
  blocs: Bloc[] = [];

  constructor(private blocService: BlocService) {}

  ngOnInit(): void {
    this.blocService.getBlocs().subscribe((blocs) => {
      this.blocs = blocs;
    });
  }
}