<template>
  <span class="monospace">{{ output }}</span>
</template>

<script>
export default {
  name: 'ccObfuscate',
  props: {
    input: { required: true },
  },
  data() {
    return {
      output: '',
    };
  },
  computed: {
    outputLength() {
      return this.input.length;
    },
  },
  methods: {
    obfuscateScript() {
      const runeString = '⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿';
      const runeLength = 255;
      for (let i = 0; i < this.outputLength / 5; i += 1) {
        const randomIndex = Math.floor(Math.random() * this.outputLength);
        if (this.output.charAt(randomIndex) !== ' ') {
          this.output = this.setCharAt(this.output, randomIndex, runeString.charAt(Math.floor(Math.random() * runeLength)));
        }
      }
    },
    setCharAt(str, index, chr) {
      if (index > str.length - 1) {
        return str;
      }
      return str.substr(0, index) + chr + str.substr(index + 1);
    },
  },
  created() {
    this.output = this.input.replace(/[^\s]/gi, '⠏');
    setInterval(() => {
      this.obfuscateScript();
    }, 100);
  },
};
</script>

<style scoped>
  .monospace {
    font-family: monospace;
  }
</style>
