<template>
  <div>
    <modal
      name="league-site-prices-modal"
      width="100%"
      height="100"
      :adaptive="true"
      :scrollable="true">
      <h2 class="pricing-modal-heading">League table pricing</h2>
      <p class="pricing-modal-subheading">Add your league..</p>
      <div class="pricing-wrapper">
        <div class="pricing-item">
          <div class="pricing-deco">
            <cloud-icon />
            <div class="pricing-price"><span class="pricing-currency">£</span>239
              <span class="pricing-period">/ yr</span>
            </div>
            <h3 class="pricing-title">Additional per season (10 games) cost £20</h3>
          </div>
          <ul class="pricing-feature-list">
            <li class="pricing-feature">Unlimited updates</li>
            <li class="pricing-feature">
              Player profiles <strong>(with or without pictures)</strong>
            </li>
            <li class="pricing-feature">
              Match details section
              <strong>
                (teams sheets, score, fines, dropouts, lates & MOM)
              </strong>
            </li>
          </ul>
          <button @click="onDismissModal" class="pricing-action">Close</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setCookie } from '../utils/helpers';
import cloudIcon from '../assets/cloud.svg';
import {
  COOKIE_LEAGUE_SITE_PRICES_DISMISSED,
  LEAGUE_SITE_PRICES_MODAL,
} from '../constants';

export default {
  components: {
    cloudIcon,
  },

  methods: {
    ...mapActions([
      'hasDismissedPricesModal',
    ]),

    onDismissModal() {
      this.hasDismissedPricesModal(true);
      setCookie(COOKIE_LEAGUE_SITE_PRICES_DISMISSED, true);
      this.$modal.hide(LEAGUE_SITE_PRICES_MODAL);
    },
  },
};
</script>

<style>
.v--modal-box.v--modal {
  background-color: #42b983;
  top: initial !important;
  left: initial !important;
  width: auto !important;
  height: 100vh !important;
  padding: 25px !important;
}

.pricing-wrapper {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 3em;
}

.pricing-modal-heading,
.pricing-modal-subheading {
  text-align: center;
  color: white;
}

.pricing-item {
  background: #fff;
  box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);
  border-radius: 20px 20px 10px 10px;
  margin: 1em;
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  align-items: stretch;
  text-align: center;
  -webkit-flex: 0 1 330px;
  flex: 0 1 330px;
}

.pricing-deco {
  border-radius: 10px 10px 0 0;
  background: rgba(76, 70, 101, 0.99);
  padding: 4em 1em 9em;
  position: relative;
  overflow: hidden;
}

.pricing-deco .pricing-deco-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.pricing-price {
  font-size: 5em;
  font-weight: bold;
  padding: 0;
  color: #fff;
  margin: 0 0 0.25em 0;
  line-height: 0.75;
}

.pricing-currency {
  font-size: 0.15em;
  vertical-align: top;
}

.pricing-period {
  font-size: 0.15em;
  padding: 0 0 0 0.5em;
  font-style: italic;
}

.pricing-price,
.pricing-title {
  text-align: center;
}

.pricing-title {
  font-size: 0.75em;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #fff;
}

.pricing-feature-list {
  margin: 0;
  padding: 0.25em 1em 2.5em;
  list-style: none;
  text-align: center;
}

.pricing-feature-list  li {
  padding: 1em 0;
}

.pricing-action {
  font-weight: bold;
  margin: auto 3em 2em 3em;
  padding: 1em 2em;
  color: #fff;
  border-radius: 30px;
  background: #4d4766;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.pricing-action:hover {
  cursor: pointer;
}
</style>
