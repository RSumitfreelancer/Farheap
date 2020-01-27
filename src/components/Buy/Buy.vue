<template>
  <div :class="['text-center']">
    <div :class="['t-a-c']">
      <div :class="['pt-4']">
          Number of licenses: 
          <input :class="['width-60']" @change="onChangeHandler" v-model="quantity" type="number" :max="selectedLicense.maxQuantity" :min="0" :disabled="!selectedLicense.id"/>
        </div>
      <div :class="['bold', 'cubic-bezier', 'text', 'pt-4']">
        TOTAL
        <span :class="['bold', 'cubic-bezier', 'text-amount']">
          ${{ amountCalculated || 0 }}<sup :class="['sup']">US</sup>
        </span>
      </div>
      <div :class="['bold', 'cubic-bezier', 'text', 'pt-4']">
        <div :class="['c-p','t-a-c']">
          <button type="button" :class="['btn']" @click="buyNow">Buy</button>
        </div>
      </div>

      <div :class="['bold', 'cubic-bezier', 'text-selected', 'pt-4', {'hide':!selectedLicense.id}]">
        <div :class="['t-a-c']">
         Selected plan: #{{selectedLicense.id}}
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./Buy.js" />

<style scoped>
.text {
  font-size: 1.5em;
}
.sup {
  font-weight: 600;
  font-size: 0.5em;
}
.text-amount {
  color: #3e8eab;
}
.text-selected{
  color: #3e8eab;
  font-size: 1em;
}
.btn {
  background: #33a845;
  padding: 6px 50px;
  color: white;
  border-radius: 18px;
  font-size: 0.8em;
}
.pt-4 {
  padding-top: 20px;
}
.width-60{
  width: 60px;
}
.hide{
  display: none;
}
</style>
