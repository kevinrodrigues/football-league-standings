<template>
  <div class="player-bio">
    <aside class="profile-card">
      <header>
        <a href="#">
          <img src="http://lorempixel.com/150/150/sports/" class="hoverZoomLink">
        </a>

        <h1>
          {{ player }}
        </h1>

        <h2>
          Played: <span>{{ played }}</span>
        </h2>

        <h2>
          Won: <span>{{ won }}</span>
        </h2>

        <h2>
          Lost: <span>{{ lost }}</span>
        </h2>

        <h2>
          Drawn: <span>{{ lost }}</span>
        </h2>

        <h2>
          MoM: <span>{{ mom }}</span>
        </h2>

        <h2>
          Total: <span>{{ total }}</span>
        </h2>

        <h2>
          Ave: <span>{{ ave }}</span>
        </h2>

      </header>

      <div class="profile-bio">
        <p>
          Player bio - info
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    player: String,
    played: Number,
    won: Number,
    lost: Number,
    drawn: Number,
    mom: Number,
    total: Number,
    ave: Number,
  },
};
</script>

<style scoped>
  body:before {
    content: "";
    height: 0px;
    padding: 0px;
    border: 130em solid #313440;
    position: absolute;
    left: 50%;
    top: 100%;
    z-index: 2;
    display: block;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19)
    forwards, borderRadius 0.2s 2.3s linear forwards;
  }

  h1,
  h2 {
    font-weight: 500;
    margin: 0px 0px 5px 0px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    margin: 0px;
  }

  .profile-card {
    background: #42b983;
    z-index: 2;
    overflow: hidden;
    width: 300px;
    margin: 20px auto;
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  }

  .profile-card h2 {
    text-align: left;
    padding: 5px;
  }

  .profile-card span {
    float: right;
  }

  .profile-card h2:nth-child(odd) {
    background-color: #f2f2f2;
  }

  .profile-card header {
    width: 179px;
    height: 280px;
    padding: 40px 20px 30px 20px;
    display: inline-block;
    float: left;
    border-right: 2px dashed #EEEEEE;
    background: #FFFFFF;
    color: #000000;
    text-align: center;
  }

  .profile-card header h1 {
    color: #42b983;
  }

  .profile-card header a {
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 25px 30px;
  }

  .profile-card header a:after {
    position: absolute;
    content: "";
    bottom: 3px;
    right: 3px;
    width: 20px;
    height: 20px;
    border: 4px solid #FFFFFF;
    -webkit-transform: scale(0);
    transform: scale(0);
    background: -webkit-linear-gradient(top, #2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-animation: scaleIn 0.3s 3.5s ease forwards;
    animation: scaleIn 0.3s 3.5s ease forwards;
  }

  .profile-card header a > img {
    width: 120px;
    max-width: 100%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: -webkit-box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease;
    -webkit-box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
  }

  .profile-card header a:hover > img {
    -webkit-box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
  }

  .profile-card .profile-bio {
    width: 175px;
    height: 180px;
    display: inline-block;
    float: right;
    padding: 50px 20px 30px 20px;
    background: #FFFFFF;
    color: #333333;
    text-align: center;
  }

  .profile-social-links li {
    list-style: none;
    margin: -5px 0px 0px 0px;
    padding: 0px;
    float: left;
    width: 25%;
    text-align: center;
  }

  @media screen and (min-height: 480px) {
    .profile-card header {
      width: auto;
      height: auto;
      padding: 30px 20px;
      display: block;
      float: none;
      border-right: none;
    }
    .profile-card .profile-bio {
      width: auto;
      height: auto;
      padding: 15px 20px 30px 20px;
      display: block;
      float: none;
    }
  }
</style>
