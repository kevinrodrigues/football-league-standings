<template>
  <div>
    <modal
      class="c-league-prices"
      name="league-site-prices"
      width="100%"
      height="auto"
      :adaptive="true"
      :scrollable="true">
      <h2>League table pricing</h2>
      £250
      <button>See Prices</button>
      <button @click="onDismissModal">Close</button>
    </modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setCookie } from '../utils/helpers';

export default {
  methods: {
    ...mapActions([
      'hasDismissedPricesModal',
    ]),

    onDismissModal() {
      this.hasDismissedPricesModal(true);
      setCookie('league-prices-dismissed', true);
    },
  },
};
</script>
