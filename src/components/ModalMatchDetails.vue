<template>
  <div>
    <modal name="match-details" :adaptive="true">
      <div class="last-match-details">
        <div class="match-details-inner">
          <h2>Match { Number }</h2>
          <h3>Team Sheet: { Getter > teamsheet}</h3>
          <h3>MoM: { Getter > MoM}</h3>
          <h3>Final score: { Getter > Final score}</h3>
        </div>
      </div>
    </modal>
  </div>
</template>

<style scoped>
.last-match-details {
  background: url("../assets/bg.jpg") no-repeat;
  background-size: cover;
  height: 100%;
  color: #fff;
}

.last-match-details h2,
.last-match-details h3 {
  margin: 0;
}

.match-details-inner {
  padding: 25px;
  background-color: rgba(0,0,0,0.4);
  height: 100%;
}
</style>
