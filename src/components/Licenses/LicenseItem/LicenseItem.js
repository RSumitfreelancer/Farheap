import store from '../../../vuex/store';

/*
  The license item component that represents the license items.
*/
export default {
  props: {
    // the object that contains the information about the license
    data: {
      type: Object,
      required: true,
    },
    // index of the license in the list
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      hoverComplete: false, // is the user hovering over the checkmark?
      destroyHover: false,
    };
  },
  methods: {
    /*
      Handles when the user checks or unchecks a license item and dispatches
      the event to the api. The vuex store is updated when we recieve a response
      from the server. See src/vuex/actions.js
    */
    selectLicense() {
      this.$store.dispatch('selectLicense', Object.assign({}, this.data));
    },
    /*
      Handles when a user clicks the destroy license button on the bottom right
      hand corner of the license item.
    */
    handleDestroy() {
      const deleteInfo = {
        id: this.data.id,
        index: this.index,
      };
      this.$store.dispatch('deleteLicense', deleteInfo);
    },
    /*
      Update the description of the license by creating a new object that represents
      the new state of the license and send it to the license api
    */
    updateDescription(newDescription) {
      const updatedLicense = {
        id: this.data.id,
        done: this.data.done,
        description: newDescription,
      };
      this.$store.dispatch('selectLicense', updatedLicense);
    },
  },
  computed: {
    selectedLicense() {
      return store.state.selectedLicense;
    },
    // computing the style of the checkmark is a little bit too much for css to handle
    checkmark() {
      let color = this.hoverComplete ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)';
      // color = this.destroyHover && !this.data.done ? 'rgba(0,0,0,0)' : color;
      color = this.data.done ? '#43cea2' : color;
      return {
        fontSize: '1.7em',
        color,
      };
    },
  },
};
