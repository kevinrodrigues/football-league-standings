<template>
  <div>
    <modal name="default-to-match-day" :adaptive="true">
        <button @click="$modal.hide('default-to-match-day')" type="button">
            Close
        </button>

        Pick the league day which you would like to default to in future.
        If you play in both leagues then this setting won't be any use right now.
        You can change / reset your choice from here again.

        <button type="button">
            Tuesday
        </button>

        <button type="button">
            Thursday
        </button>

        <button type="button">
            Reset
        </button>
    </modal>
  </div>
</template>
