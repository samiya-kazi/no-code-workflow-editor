import { Injectable } from '@angular/core';
import { ITeam } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  teams: ITeam[] = [];

  addTeam (team: ITeam) {
    this.teams.push(team);
    return this.teams;
  }

  updateTeam (team: ITeam) {
    this.teams = this.teams.map(item => item.id === team.id ? team : item);
    return team
  }

  removeTeam (team: ITeam) {
    this.teams = this.teams.filter(item => item.id !== team.id);
    return team
  }
}
