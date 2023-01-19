<template>
  <div class="modal-overlay">
    <div class="cardo modal">
      <div class="header">
        <p class="title">Phone number</p>
        <button class="x">
          <i class="bx bx-x"></i>
        </button>
      </div>
      <div class="body">
        <form action="">
          <input type="text" class="input" placeholder="Phone number" />
          <button class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000da;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
