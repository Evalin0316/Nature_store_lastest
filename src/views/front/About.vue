<template>
    <div class="container-fluid px-3 px-md-0 pb-5">
    <header>
      <h1 class="fs-4 font-weight-bold aboutTitle">關於NATURE</h1>
      <div class="container header-img fade-out"></div>
    </header>
    <div class="p-5 product row g-0 px-md-3 mx-auto" style="max-width:1200px">
      <div>
        <h1 class="fs-4 mt-5 font-weight-bold ">品牌理念</h1>
        <p class="flex">
          自然X舒適的時裝搭配，充分享受自由的生活，創造屬於自己的穿搭樂趣
        </p>
      </div>
      <div class="ml-6">
        <h1 class="fs-4 mt-5 font-weight-bold">訂單注意事項</h1>
        <ul class="aboutFlex">
          <li>付款方式：信用卡刷卡、取貨付款</li>
          <li>運送方式：宅配、便利商店取貨(全家、7-11、萊爾富)</li>
          <li>
            退貨：七日內可退貨，商品包裝需完整復原才可退回，若有破損、污漬等狀況無法退回
          </li>
          <li>客服專線：(02)12345678</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  emits: ['page-loading'],
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$emitter.emit('page-loading', false);
    }, 1500);
  },
  created() {
    this.$emitter.emit('page-loading', true);
  },
};
</script>
