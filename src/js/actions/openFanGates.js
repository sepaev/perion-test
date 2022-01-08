import { getRefs } from '../refs';
export function openFanGates() {
  const { fansGate, tagLines, teams, hotspot } = getRefs();
  const [fansLeft, fansRight] = fansGate;
  const [leftTeam, rightTeam] = teams;
  tagLines.forEach(text => {
    text.style.opacity = 0;
    text.style.pointerEvents = 'none';
  });
  leftTeam.style.transform = 'translateX(-250%)';
  fansLeft.style.transform = 'translate(-100%, -140%)';
  rightTeam.style.transform = 'translateX(250%)';
  fansRight.style.transform = 'translate(100%, 130%)';

  leftTeam.style.animation = 'teamsHideLeftAnimation 800ms 1 linear';
  rightTeam.style.animation = 'teamsHideRightAnimation 800ms 1 linear';
  hotspot.style.opacity = 1;
  hotspot.style.pointerEvents = 'initial';
}
