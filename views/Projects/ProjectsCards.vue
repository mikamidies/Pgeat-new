<template>
  <div class="project-cards">
    <div class="container">
      <div class="project-cards__inner">
        <ProjectsCard
          v-for="project in projects"
          :key="project.id"
          :data="project"
          class="project-cards__card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsCard from './ProjectsCard.vue'

export default {
  name: 'ProjectCards',

  components: {
    ProjectsCard,
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.project-cards {
  padding: 175px 0 108px 0;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
  }

  &__card {
    width: calc(100% / 3 - 20px);
    margin-left: 20px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 900px) {
  .project-cards {
    padding: 120px 0 90px 0;
    &__card {
      width: calc(100% / 2 - 20px);
    }
  }
}

@media screen and (max-width: 576px) {
  .project-cards {
    padding: 80px 0 70px 0;
    &__card {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
