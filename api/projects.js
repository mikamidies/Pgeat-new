/* eslint-disable */
export default {
  async getProjects(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/en/projects')
      } else {
        res = await $nuxt.$axios.get('/en/projects')
      }

      return res.data
    } catch (e) {
      console.log(e)
    }
  },

  async getProject(id, axios) {
    try {
      let res
      if (axios) {
        res = await axios.get(`/en/projects/${id}`)
      } else {
        res = await $nuxt.$axios.get(`/en/projects/${id}`)
      }

      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
