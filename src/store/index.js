import Vue from 'vue';
import Vuex from 'vuex';
import leagueResults from '../services/standings/index';
import {
  SET_LEAGUE_STANDINGS,
  SET_HEADER_VISIBILITY,
  SET_LAST_MATCH_DETAILS,
} from './mutation.types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagueTable: null,
    headerIsVisible: false,
    lastMatchDetails: [],
  },
  actions: {
    getLeagueStandings: ({ commit }, payload) => {
      const leagueStandingsResponse = leagueResults.getLeagueResults(payload);

      if (leagueStandingsResponse) {
        commit(SET_LEAGUE_STANDINGS, leagueStandingsResponse);
      }
    },

    getLastMatchDetails: ({ commit }, payload) => {
      const lastMatchDetails = leagueResults.getLastMatchDetails(payload);

      if (lastMatchDetails) {
        commit(SET_LAST_MATCH_DETAILS, lastMatchDetails);
      }
    },

    setHeaderVisibility: ({ commit }, payload) => {
      commit(SET_HEADER_VISIBILITY, payload);
    },
  },
  mutations: {
    [SET_LEAGUE_STANDINGS](state, payload) {
      state.leagueTable = payload;
    },

    [SET_HEADER_VISIBILITY](state, payload) {
      state.headerIsVisible = payload;
    },

    [SET_LAST_MATCH_DETAILS](state, payload) {
      state.lastMatchDetails = payload;
    },
  },
  getters: {
    sortByAverage: ({ leagueTable }) => leagueTable.sort((a, b) => b.ave - a.ave),

    sortByTotal: ({ leagueTable }) => leagueTable.sort((a, b) => b.total - a.total),

    getMom: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { mom } = lastMatchDetails.find(el => el.mom);

        return mom.pop();
      }

      return false;
    },

    getFinalScore: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { finalScore } = lastMatchDetails.find(el => el.finalScore);

        return finalScore;
      }

      return false;
    },
  },
});
