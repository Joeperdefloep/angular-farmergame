import { Component, OnInit } from '@angular/core';
import {AssetService} from '../asset.service'

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor(public assetService: AssetService) { }

  ngOnInit(): void {
  }

}
