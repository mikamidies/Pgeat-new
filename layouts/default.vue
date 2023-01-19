<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <div class="page">
      <TheContactBlock />
      <TheFooter />
      <ModalForm />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheContactBlock from '@/components/TheContactBlock'
import TheFooter from '@/components/TheFooter'
import ModalForm from '@/components/ModalForm'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheContactBlock,
    TheFooter,
    ModalForm,
  },

  provide() {
    return {
      modal: this.modal,
      updateModal: (val) => (this.modal.value = val),
    }
  },

  data() {
    return {
      modal: {
        value: false,
      },
    }
  },
}
</script>
