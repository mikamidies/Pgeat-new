<template>
  <div class="page">
    <AppTop :title="title" :links="links" />
    <ContactsMain />
    <ContactsMap />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import AppTop from '@/components/AppTop'
import ContactsMain from '@/views/Contacts/ContactsMain'
import ContactsMap from '@/views/Contacts/ContactsMap'

export default {
  name: 'ContactsPage',
  transition: 'fade',

  data() {
    return {
      links: [
        {
          title: 'Contact Us',
        },
      ],
      title: [
        {
          title: 'Contact Us',
        },
      ],
    }
  },

  mounted() {
    AOS.init({})
  },

  components: {
    ContactsMain,
    AppTop,
    ContactsMap,
  },

  head() {
    return {
      title: 'Phoenix | Contacts',
    }
  },
}
</script>
