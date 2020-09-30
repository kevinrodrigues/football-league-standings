<template>
  <div>
    <modal name="league-site-prices" height="auto" :adaptive="true" :scrollable="true">
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
