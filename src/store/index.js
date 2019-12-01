import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagueTable: null,
  },
  actions: {
    getLeagueStandings({ commit }) {
      commit('getLeagueStandings', [{
        players: 'Kevin',
        played: 8,
        won: 7,
        draw: 0,
        lost: 1,
        ps: 0,
        doOut: 0,
        late: 0,
        mom: 0,
        total: 0,
        ave: 0,
      },
      {
        players: 'Sam',
        played: 5,
        won: 4,
        draw: 0,
        lost: 1,
        ps: 0,
        doOut: 0,
        late: 0,
        mom: 0,
        total: 0,
        ave: 0,
      },
      {
        players: 'Kelly',
        played: 6,
        won: 1,
        draw: 0,
        lost: 0,
        ps: 0,
        doOut: 0,
        late: 0,
        mom: 8,
        total: 0,
        ave: 0,
      },
      {
        players: 'Foo',
        played: 10,
        won: 8,
        draw: 2,
        lost: 0,
        ps: 0,
        doOut: 0,
        late: 0,
        mom: 4,
        total: 0,
        ave: 0,
      }]);
    },
  },
  mutations: {
    getLeagueStandings(state, payload) {
      state.leagueTable = payload;
    },
  },
});
