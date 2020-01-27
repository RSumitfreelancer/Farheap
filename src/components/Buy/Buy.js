import store from '../../vuex/store';

export default {
  methods: {
    buyNow() {
      console.log('licenseSelected', this.selectedLicense, this.amountCalculated);
    },
    onChangeHandler(e) {
      let quantity = e.target.value;
      if (this.selectedLicense &&
        this.selectedLicense.price) {
        if (quantity >= this.selectedLicense.maxQuantity) {
          quantity = this.selectedLicense.maxQuantity;
        }
        if (quantity < 0) {
          quantity = 0;
        }
        this.$store.dispatch('updateQuatity', quantity);
      }
    },
  },
  computed: {
    selectedLicense() {
      return store.state.selectedLicense;
    },
    quantity() {
      return store.state.quantity;
    },
    amountCalculated() {
      const license = store.state.selectedLicense;
      const quantity = store.state.quantity;
      if (license && license.price && quantity) {
        return license.price * quantity;
      }
      return 0;
    },
  },
}
;
