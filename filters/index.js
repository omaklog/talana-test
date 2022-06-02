import Vue from "vue";
import moment from 'moment'

import 'moment/locale/es';
moment.locale('es');

Vue.filter('currency', (value)=>{
  let val = (value / 1).toFixed(2).replace('.', '.')
  return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
});
