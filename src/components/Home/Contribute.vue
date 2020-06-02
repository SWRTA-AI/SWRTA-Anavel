<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col
        class="ContributeContainer col-xl-4 col-lg-6 col-sm-8 col-12"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <b-row class="title">
          <b-col>{{ title }}</b-col>
        </b-row>

        <b-row class="disclaimer">
          <b-col>{{ disclaimer }}</b-col>
        </b-row>

        <b-row
          class="skillsNeeded"
          v-for="(skill, i) of skills"
          :key="i"
        >
          <b-col class="text-right col-lg-6 col-4">
            <b>{{ skill.name }}</b>
          </b-col>
          <b-col class="text-left col-lg-6 col-8">
            <span>{{ skill.techstack }}</span>
          </b-col>
        </b-row>

        <b-row class="shoutOut">
          <div v-html="contributeText"></div>
        </b-row>
      </b-col>
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Introduction from '@/components/Home/Introduction.vue';

export default {
  components: {
    Introduction,
  },
  data() {
    return {
      title: 'Contribute',
      disclaimer: '* This is a nonprofit project *',
      contributeText:
        'If you have experience with any (but not limited to) skills listed above,\
        loves RTA and want to contribute, please feel free to \
        contact us via email to: <h5>swrta.ai@gmail.com</h5>',
      skills: [
        {
          name: 'Data Gathering',
          techstack: 'SWProxy, Node.js',
        },
        {
          name: 'Data Science',
          techstack: 'JupyterNotebook, Pandas, Numpy',
        },
        {
          name: 'Machine Learning',
          techstack: 'Keras, Tensorflow',
        },
        {
          name: 'Backend',
          techstack: 'Python3, Flask',
        },
        {
          name: 'Frontend',
          techstack: 'Vue.js',
        },
        {
          name: 'Devops',
          techstack: 'Docker, Kubernetes, GoogleCloud',
        },
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
.ContributeContainer {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  padding: 1vw;
  margin: 1vh 0 5vh 0;
}

.title {
  font-size: 2em;
  font-weight: 700;
}
.disclaimer {
  font-size: 0.8em;
  margin-bottom: 3em;
}
.skillsNeeded {
  margin: 1em 0;
  align-items: center;
}
.shoutOut {
  margin: 3em 1em 1em 1em;
}
</style>
