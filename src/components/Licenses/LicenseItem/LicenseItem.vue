<template>
  <div
    :class="[
      'z-1',
      'p-r',
      'license-wrapper',
      'license',
      { 'license-destroy': destroyHover },
      { 'text-selected': data.id === selectedLicense.id }
    ]"
  >
    <!-- container for the completed button -->
    <div class="p-a complete-ctn">
      <div
        :class="[
          'circle',
          'p-r',
          'center',
          'license-wrapper-color',
          'c-p',
          'check-circle',
          { 'check-circle-active': data.id === selectedLicense.id }
        ]"
        @mouseover="hoverComplete = true"
        @mouseleave="hoverComplete = false"
        @click="selectLicense"
      >
        <i
          :class="[
            'material-icons',
            'center',
            'license-wrapper-color',
            'checkmark',
            { 'checkmark-active': data.id === selectedLicense.id }
          ]"
        >
          &#xe061;
        </i>
      </div>
    </div>
    <!-- license description -->
    <div
      :class="[
        'bold',
        'cubic-bezier',
        'text-name',
        { 'text-done': data.id === selectedLicense.id }
      ]"
    >
      {{ this.data.description }} #{{ this.data.id }}
      <span
        :class="[
          'bold',
          'cubic-bezier',
          'float-right',
          'text',
          { 'text-done': data.id === selectedLicense.id }
        ]"
      >
        $ {{ this.data.price }} per license
      </span>
    </div>
  </div>
</template>

<script src="./LicenseItem.js"></script>

<style scoped>
.license {
  padding: 15px 15px 15px 50px;
  background: white;
  border-radius: 3px;
  font-size: 1.07em;
  margin: 12px 0px;
  border-radius: 3px;
  word-wrap: break-word;
}
.float-right {
  float: right;
}
.license:hover {
  background: #ebf4f7;
}
.license.text-selected {
  background: #ebf4f7;
}
.license-destroy {
  background: #ffebee;
}
.complete-ctn {
  left: 8px;
  top: 0px;
  width: 50px;
  height: 100%;
}
.check-circle {
  border: 3px solid rgba(0, 0, 0, 0.15);
  width: 20px;
  height: 20px;
}
.check-circle-active {
  border-color: #31628b;
}
.checkmark {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0);
}
.checkmark:hover {
  color: rgba(0, 0, 0, 0.2);
}
.checkmark-active,
.checkmark-active:hover {
  color: #0193be;
}
.destroy {
  color: rgba(0, 0, 0, 0.1);
  bottom: 5px;
  right: 5px;
}
.destroy:hover {
  color: #f44336;
}
.text {
  color: #909192;
  font-size: 0.8em;
}
.text-name {
  color: #333;
  font-weight: 700;
  font-size: 0.8em;
}
</style>
