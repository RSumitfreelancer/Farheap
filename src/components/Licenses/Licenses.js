import { mapGetters } from 'vuex';
import LicenseItem from './LicenseItem/LicenseItem.vue';
import Buy from '../Buy/Buy.vue';

export default {
  components: {
    'license-item': LicenseItem,
    buy: Buy,
  },
  computed: {
    // map the license from vuex
    ...mapGetters({
      licenses: 'getLicenses',
    }),
  },
};
