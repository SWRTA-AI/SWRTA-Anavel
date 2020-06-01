<template>
  <div class="tierlist">
    <b-container>
      <b-row>
        <FadeImage :src="tierlist" />
      </b-row>
      <b-row>
        <b-col class="credit">
          by
          <a class="text-warning" :href="credit.url">{{
            credit.author
          }}</a>
          -
          {{ credit.year }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  name: 'Tierlist',
  components: {
    FadeImage,
  },
  data() {
    return {
      tierlist: require('@/assets/static/images/tierlist.png'),
      credit: {
        author: 'Seiishizo',
        url: 'https://www.youtube.com/watch?v=jOe_H9_RGA4',
        year: '2020',
      },
    };
  },
};
</script>

<style scoped>
.credit {
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: -4em;
}

.credit a {
  text-decoration: none;
}
</style>
