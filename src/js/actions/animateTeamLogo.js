import { getRefs } from '../refs';
export function animateTeamLogo() {
  const [leftTeam, rightTeam] = getRefs().teams;
  leftTeam.style.animation = 'teamsShowLeftAnimation 1500ms 1 linear';
  leftTeam.style.opacity = 1;
  leftTeam.style.width = '18.9vw';
  leftTeam.style.height = '18.9vw';
  leftTeam.style.maxWidth = '18.9vw';
  leftTeam.style.transform = 'translateX(0%)';

  rightTeam.style.animation = 'teamsShowRightAnimation 1500ms 1 linear';
  rightTeam.style.opacity = 1;
  rightTeam.style.width = '20.15vw';
  rightTeam.style.height = '20.15vw';
  rightTeam.style.maxWidth = '20.15vw';
  rightTeam.style.transform = 'translateX(0%)';
}
