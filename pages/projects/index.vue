<template>
  <div class="page">
    <AppTop :title="title" :subtitle="subtitle" :links="links" />
    <ProjectsCards :projects="projects" />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import AppTop from '@/components/AppTop'
import ProjectsCards from '@/views/Projects/ProjectsCards'
import projectsApi from '@/api/projects'

export default {
  name: 'ProjectsPage',
  transition: 'fade',

  data() {
    return {
      links: [
        {
          title: 'Our Projects',
        },
      ],
      title: [
        {
          title: 'Our Projects',
        },
      ],
      subtitle: [
        {
          subtitle:
            'The expanding property market makes this the ideal moment to invest in property in Great Britain, one of the most sought-after locations in the whole globe. Clubs, casinos, and opulent hotels are all more reasonably priced in Great Britain than they are in France or Italy, and the country also has a sophisticated tourist infrastructure',
        },
      ],
    }
  },

  async asyncData({ $axios }) {
    const projects = await projectsApi.getProjects($axios)

    return {
      projects: projects || [],
    }
  },

  mounted() {
    AOS.init({})
  },

  components: {
    AppTop,
    ProjectsCards,
  },

  head() {
    return {
      title: 'Phoenix | Projects',
    }
  },
}
</script>

<style scoped lang="scss"></style>
