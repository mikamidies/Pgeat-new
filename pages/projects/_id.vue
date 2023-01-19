<template>
  <div class="page">
    <ProjectsInnerTop
      :image="project && project.main_photo"
      :title="project && project.name"
    />
    <AppSliderBlock
      :title-main="project && project.name"
      title-secondary="Living Space"
      subtitle="About project"
      :link="sliderLink"
      :images="project && project.photos"
      :text="project && project.about"
    />
    <ProjectsInnerAbout
      :foto="project && project.second_photo"
      :details="project && project.details"
    />
    <ProjectsInnerBenefits
      v-if="project && project.benefits.length"
      :title="project && project.name"
      :benefits="project && project.benefits"
    />
    <ProjectsInnerVariants
      v-if="project && project.apartments[0]"
      :apartments="project && project.apartments"
    />
    <ProjectsInnerMainThings
      v-if="project && project.features"
      :title="project && project.name"
      :items="project.features"
    />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import ProjectsInnerTop from '@/views/Projects/ProjectsInnerTop'
import AppSliderBlock from '@/components/AppSliderBlock'
import ProjectsInnerAbout from '@/views/Projects/ProjectsInnerAbout'
import ProjectsInnerBenefits from '@/views/Projects/ProjectsInnerBenefits'
import ProjectsInnerVariants from '@/views/Projects/ProjectsInnerVariants'
import ProjectsInnerMainThings from '@/views/Projects/ProjectsInnerMainThings'
import projectsApi from '@/api/projects'

export default {
  name: 'ProjectsInnerPage',

  components: {
    ProjectsInnerTop,
    AppSliderBlock,
    ProjectsInnerAbout,
    ProjectsInnerBenefits,
    ProjectsInnerVariants,
    ProjectsInnerMainThings,
  },

  async asyncData({ params, $axios }) {
    const project = await projectsApi.getProject(params.id, $axios)

    return {
      project,
    }
  },

  head() {
    return {
      title: 'Phoenix',
    }
  },

  computed: {
    sliderLink() {
      return {
        title: 'Download the Catalog',
        type: 'external',
        to: this.project && this.project.file,
      }
    },
  },

  mounted() {
    AOS.init({})
  },
}
</script>
