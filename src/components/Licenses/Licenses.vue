<template>
  <div>
    <div class="container" style="max-width: 624px; padding: 24px;">
      <div class="main-container">
        <div class="row">
          <h1 id="license-header" class="light-font t-a-c">Licenses</h1>
          <div id="licenses-list">
            <transition-group name="license" tag="ul">
              <li v-for="(license, index) in licenses" v-bind:key="license.id">
                <license-item
                  v-bind:data="license"
                  v-bind:index="index"
                ></license-item>
              </li>
            </transition-group>
            <div><buy></buy></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Licenses.js"></script>

<style scoped>
.main-container {
  background: #f8f8f8;
  padding: 24px 34px !important;
  margin: 10px;
  min-height: 90%;
}
#license-header {
  font-size: 2em;
  margin: 12px 0px 12px 0px;
  font-weight: 100;
}
#licenses-list ul {
  display: block;
  list-style-type: none;
  padding: 0px;
}
#licenses-list > ul li {
  margin-top: 24px;
}
</style>
