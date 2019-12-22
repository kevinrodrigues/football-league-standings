<template>
  <div>
    <modal name="match-details" :adaptive="true">
      <div class="last-match-details">
        <div class="match-details-inner">
          <h2>Match: <span>{{ number }}</span></h2>
          <h3>Team Sheet: <span>{ @todo Getter > teamsheet }</span></h3>
          <h3>MoM: <span>{{ mom }}</span></h3>
          <h3>Final score: <span>{{ finalScore }}</span></h3>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    mom: [String, Boolean],
    finalScore: [String, Boolean],
  },
};
</script>

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

.last-match-details h2 span,
.last-match-details h3 span {
    color: #5cf3af;
}

.match-details-inner {
  padding: 25px;
  background-color: rgba(0,0,0,0.6);
  height: 100%;
}
</style>
