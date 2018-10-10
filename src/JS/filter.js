import Vue from "vue"

Vue.filter("money",function (value) {
  value = parseFloat(value).toFixed(2)
  return "￥"+value;
})
