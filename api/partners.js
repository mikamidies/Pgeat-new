/* eslint-disable */
export default {
  async getPartners(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/en/partners')
      } else {
        res = await $nuxt.$axios.get('/en/partners')
      }

      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
