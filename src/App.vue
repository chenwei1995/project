<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,html {
  width: 100%;
  overflow-x: hidden;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-center{
  text-align: center;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.left {
  float: left;
}
.right {
  float: right;
}
.pl-10 {
  padding-left: 10px;
}
.pr-10 {
  padding-right: 10px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pt-10 {
  padding-top: 10px;
}
.ml-10 {
  margin-left: 10px;
}
.mr-10 {
  margin-right: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mt-10 {
  margin-top: 10px;
}
.bg-f7f7f7 {
  background-color: #f7f7f7;
}
.bg-fff{
  background-color: #fff;
}
.bg-5e67a5 {
  background-color: #5e67a5;
}
.fs-12 {
  font-size: 12px;
}
.fs-14 {
  font-size: 14px;
}
.color-666 {
  color: #666;
}
.color-999{
  color: #999;
}
.color-fff {
  color: #fff;
}
.color-red {
  color: #c22;
}
.border-t{
  border-top: 1px solid #eee;
}
.border-r{
  border-right: 1px solid #eee;
}
.border-l{
  border-left: 1px solid #eee;
}
.border-b{
  border-bottom: 1px solid #eee;
}
.border {
  border: 1px solid #eee;
}
.line-through{
  text-decoration: line-through;
}
.ft-wt {
  font-weight: bold;
}
.ft-nm {
  font-style: normal;
}
.inline{
  display: inline-block;
}
.hide {
  display: none;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.flex-2　{
  flex: 2;
}
/*单行省略*/
.ellipsis-1{
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
    overflow: hidden;
}
/*动画效果*/
.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-out .1s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
