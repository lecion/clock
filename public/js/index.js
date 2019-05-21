const weekMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
let vm = new Vue({
  el: '#app',
  data: {
    time: new Date()
  },
  computed: {
    currentWeek() {
      let index = Number(moment(this.time).format('d'));
      return weekMap[index];
    },
    currentTime() {
      return moment(this.time).format('HH : mm : ss');      
    },
    currentDate() {
      return moment(this.time).format('YYYY年MM月DD日');
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.time = new Date()
      }, 1000);
    }
  }
})