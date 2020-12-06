<template>
  <div>
    <h1>Rules</h1>

    <div class="c-rules-icon-wrapper">
      <rules-icon class="c-rules-icon" />
    </div>

    <ul class="c-rules">
      <li>1. Call in <strong>8:30pm Sundays</strong> - Send the word <strong>`in`</strong>
        at 8:30pm. The first 14 will make the cut,
        the rest will go on reserves. No calling `in` for anyone else unless agreed by admin.</li>
      <li>2. Any form of deliberate HANDBALL will result in a
        <strong>10 minute</strong> sin-bin.</li>
      <li>3. Players can only call laces when their own team has the ball as
        it can stop an advantage for the other team. If anyone is doing laces
        at other time there is no need to stop, play should continue!</li>
      <li>4. All players must submit their MOM votes to admin or to an appointment
        person by <strong>11:59pm</strong>. If this hasn’t
        happened then every player that hasn’t voted will receive -1 point (late).</li>
      <li>5. The captains to decide on finishing time, if this does not get decided
        (i.e forgotten to agree at the start) then the game will be played for 1.5 hours max.</li>
      <li>6. Late - Minus 1 point if you're not on the pitch at <strong>9:01</strong> this
        will also incur a fine of 0.5x the match fee.</li>
      <li>7. Everyone to pay through the app. If the app is down then transfer to admin.
        Deadline for payments is Tuesday <strong>8:30pm</strong>, anyone on the reserve
        list can make a payment from 8:30pm if there's outstanding payments from the first
        14 taking a spot.</li>
      <li>8. No sliding or going to ground at all!</li>
      <li>9. Fouls - To be called by the player that got fouled & no one else. If the foul
        is in dispute then captains to decide on outcome. The game can be played on if
        called by anyone else other than the person that was fouled.</li>
      <li>10. No direct pass backs to the goalkeeper, the ball should be passed to
        another team member or by the opposition before if can go back to the keeper.
        Pass backs result in a pen.</li>
      <li>11. Entering/touching the ball in the D area results in a pen to the opposite team.</li>
      <li>12. No switching keepers if a pen is conceded, the keeper at the time must stay in.</li>
      <li>13. No calling <strong>`leave it`</strong> <strong>`Mine`</strong> etc, you must
        call out a name.</li>
      <li>14. Deliberate fouls as a last man including handball or any type of obstruction to
        the attacking team results in a <strong>2 min</strong> sin bin.</li>
    </ul>
  </div>
</template>

<script>
import rulesIcon from '../assets/rules.svg';


export default {
  components: {
    rulesIcon,
  },
};
</script>

<style>
.c-rules {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  list-style: none;
  text-align: left;
}

.c-rules li {
  margin-bottom: 10px;
  padding: 20px 0;
  border-bottom: 1px dashed #d2d2d2;
}

.c-rules-icon-wrapper {
  position: relative;
  overflow: hidden;
  height: 120px;
}

.c-rules-icon {
  animation: animateUpDown 1s ease none;
  position: absolute;
  bottom: 0;
  left: 42%;
  margin: 20px auto 0;
  width: 100px;
}

@keyframes animateUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: -120px;
  }
}
</style>
