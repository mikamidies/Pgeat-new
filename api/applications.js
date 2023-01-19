/* eslint-disable */
export default {
  async submitApplication(formData) {
    try {
      const res = await $nuxt.$axios.post('/contacts', formData)

      return res
    } catch (e) {
      console.log(e)
    }
  },
}
