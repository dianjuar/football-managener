import { Component, OnInit } from '@angular/core';

import { TeamsService } from './shared/teams.service';
import { Team } from './shared/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  /**
   * The list of the teams
   */
  teamList: Array<Team>;

  constructor(
    private teamsService: TeamsService
  ) {
    // make a copy of the teams
    this.teamList = this.teamsService.getElements();
  }

  ngOnInit() {
  }

}