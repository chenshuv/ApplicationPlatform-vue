<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
};
</script>

<style>
/* SWITCH */

.fade-y-enter-active,
.fade-y-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-y-enter,
.fade-y-leave-to {
  transform: translateX(-200px);
  /* opacity: 0; */
}
.fade-x-enter-active,
.fade-x-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-x-enter,
.fade-x-leave-to {
  transform: translateX(200px);
  /* opacity: 0; */
}
.toggle > button:focus {
  outline: 0;
}
.toggle > button {
  background: transparent;
  border: 1px solid var(--txt-main);
  color: var(--txt-main);
  padding: 20px 70px;
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  margin-bottom: 0em;
  /* margin: 2.9em 1em; */
}

.toggle {
  width: 350px;
  /* background: red; */
  text-align: center;
  /* transition: float 1s; */
  /* float: right; */
  /* position: absolute; */
  transform: translateX(550px);
  transition: all 0.6s ease;
  margin-top: 3em;
}

.switch.active > .group > .toggle {
  /* right: 550px; */
  transform: translateX(0px);
}
@keyframes rotating /* Safari and Chrome */ {
  0% {
    transform: scale(1) translateY(0em);
  }
  50% {
    transform: scale(1.05) translateY(4em);
  }
  100% {
    transform: scale(1) translateY(0em);
  }
}
svg.group > polygon:nth-child(odd) {
  animation: rotating 25s ease-in-out infinite;
}
svg.group > polygon:nth-child(even) {
  animation: rotating 14s ease-in-out infinite;
}

.active > .ornaments > .group {
  transform: translateX(-20px);
}
.ornaments > .group {
  transition: transform 1s;
}
.ornaments {
  pointer-events: none;
}

.group > .txt {
  /*width: -webkit-fill-available;*/
  display: flow-root;
}
.group {
  width: 100%;
  height: fit-content;
  align-self: center;
  position: absolute;
}

.sign-in {
  display: none;
}
.sign-up {
  float: right;
}

.sign-up,
.sign-in {
  max-width: 350px;
  height: inherit;
}

.container > span {
  color: var(--txt-main);
  line-height: 1.7;
  letter-spacing: 0.02em;
  font-weight: 300;
}

.container {
  height: fit-content;
  align-self: center;
  /* padding: 3em; */
  text-align: center;
}
.sign h3 {
  color: var(--txt-main);
  font-weight: 700;
  margin: 0em;
  margin-bottom: 1em;
  font-size: xx-large;
  text-align: center;
}
.sign {
  display: grid;
  /*display: inline-grid;*/
  padding: 0em 3em;
  box-sizing: border-box;
}

.active {
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}

.switch {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: 100;
  clip-path: inset(0px 0px 0px 550px round 5px);
  background: rgb(56, 183, 143);
  background: radial-gradient(
      circle at bottom left,
      rgb(56, 183, 143) 0%,
      /*rgb(99, 45, 333) 0%,*/
      rgb(58, 167, 177) 100%
  );
  transition: clip-path 0.6s;
  overflow: hidden;
  display: grid;
}
.switch img {
  filter: grayscale(1) brightness(3);
}
</style>
<style>
.fade-out-enter-active,
.fade-out-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-out-enter,
.fade-out-leave-to {
  transform: translateX(200px);
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-in-enter,
.fade-in-leave-to {
  transform: translateX(-200px);
  clip-path: inset(0px 0px 0px 550px round 5px) !important;
}

form input[type='submit'] {
  background: var(--accent);
  color: var(--txt-main);
  padding: 20px 70px;
  border: 0;
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  margin: 3em;
  margin-bottom: 0em;
}
.form-sign-up {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  right: 0px;
  clip-path: inset(0px 0px 0px 0px round 5px);
}
body {
  --bg-main: #ffffff;
  --bg-scnd: #f0f4f3;
  --txt-main: white;
  --txt-medium: #e4e4e4;
  --txt-medium-dark: #acacac;
  --txt-box-bg: #f4f8f7;
  --accent: #3aaf9f;
}
input[type='submit'],
button {
  transition: filter 0.2s;
}
input[type='submit']:hover,
button:hover {
  filter: brightness(0.9);
}

.socials button {
  background: var(--bg-main);
  border: 1px solid var(--txt-medium);
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin: 5px;
  font-size: 1.1em;
}

.holder h3 {
  color: var(--accent);
  font-weight: 700;
  margin: 0.5em 1em;
  font-size: xx-large;
  text-align: center;
}
.holder {
  text-align-last: center;
}
.forgot span {
  border-bottom: 3px solid #f4f8f7;
  padding: 5px 0px;
  color: black !important;
}
.forgot {
  margin: 1.5em;
  display: block;
}

.form-sign-in {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  clip-path: inset(0px 0px 0px 0px round 5px);
}
.socials {
  margin: 1.2em 0em;
}
.holder > span {
  color: var(--txt-medium-dark);
  cursor: default;
}
.holder {
  width: 350px;
}
.form {
  position: absolute;
  width: inherit;
  height: inherit;
}

@keyframes example {
  0% {
    transform: rotate(-100deg) translateX(0em);
  }
  30% {
    transform: rotate(-110deg) translateX(4em);
  }
  40% {
    transform: rotate(-110deg) translateX(2em);
  }
  40% {
    transform: rotate(-110deg) translateX(6em);
  }
  40% {
    transform: rotate(-110deg) translateX(4em);
  }
  100% {
    transform: rotate(-100deg) translateX(0em);
  }
}
@keyframes examplex {
  0% {
    transform: scale(1) translateY(0em);
  }
  30% {
    transform: scale(1.2) translateY(4em);
  }
  40% {
    transform: scale(1) translateY(2em);
  }
  40% {
    transform: scale(1.4) translateY(6em);
  }
  40% {
    transform: scale(1.2) translateY(4em);
  }
  100% {
    transform: scale(1) translateY(0em);
  }
}



#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-scnd);
  height: 100vh;
  display: grid;
  z-index: 10;
  position: relative;
  overflow: hidden;
}

.switch img,
.form img {
  max-width: 30px;
  position: absolute;
  margin: 1em;
}
form input[type='submit'],
a,
button {
  cursor: pointer;
}
</style>
