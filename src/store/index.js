import Vue from 'vue';
import Vuex from 'vuex';
import leagueResults from '../services/standings/index';
import {
  SET_LEAGUE_STANDINGS,
  SET_HEADER_VISIBILITY,
  SET_LAST_MATCH_DETAILS,
  SET_PRICES_SEEN_STATE,
} from './mutation.types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagueTable: null,
    headerIsVisible: false,
    lastMatchDetails: [],
    hasDismissedPricesModal: false,
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

    hasDismissedPricesModal: ({ commit }, payload) => {
      commit(SET_PRICES_SEEN_STATE, payload);
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

    [SET_PRICES_SEEN_STATE](state, payload) {
      state.hasDismissedPricesModal = payload;
    },
  },

  getters: {
    sortByAverage: ({ leagueTable }) => leagueTable.sort((a, b) => b.ave - a.ave),

    sortByTotal: ({ leagueTable }) => leagueTable.sort((a, b) => b.total - a.total),

    getMom: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { mom } = lastMatchDetails?.find(el => el.mom);

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

    getTeamSheets: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { teamOne, teamTwo } = lastMatchDetails.find(el => el);

        return [
          teamOne,
          teamTwo,
        ];
      }

      return false;
    },

    getPlayerFines: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { fines } = lastMatchDetails.find(el => el);

        return fines.length ? fines.join(', ') : 'No fines. 🎉';
      }

      return false;
    },

    getMatchNumber: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { matchNumber } = lastMatchDetails.find(el => el);

        return matchNumber;
      }

      return false;
    },

    getDropOuts: ({ lastMatchDetails }) => {
      if (lastMatchDetails.length) {
        const { dropOuts } = lastMatchDetails.find(el => el);

        return dropOuts.length ? dropOuts.join(', ') : 'No dropouts. 🎉';
      }

      return false;
    },
  },
});
