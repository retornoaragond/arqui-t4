<script>
export default {
  async asyncData({ $content, params }) {
    const composer = await $content('composers', params.slug).fetch();
    const albums = await $content('albums').where({ composerId: params.slug }).fetch();
    return { composer, albums };
  }
};
</script>

<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img class="u-max-full-width" :src="'/images/' + composer.image">
      </div>
      <div class="six columns">
        <h4>{{ composer.name }}</h4>
        Nacionalidad: {{ composer.nationality }}; Fecha de nacimiento: {{ composer.birth_date }}<br>
        Géneros musicales: {{ composer.music_genres.join(', ') }}<br><br>
        <b>Biografía</b><br>
        <nuxt-content :document="composer" />
      </div>
      <div class="three columns"></div>
      <h5>Álbumes</h5>
      <ul class="album-list">
        <li v-for="album in albums" :key="album.id" class="album-item">
          <NuxtLink :to="{ name: 'albums-slug', params: { slug: album.slug } }" class="album-link">{{ album.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <utteranc/>
    <FooterView />
  </div>
</template>

<style scoped>
.project-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}

h4 {
  margin-top: 15px;
}

.album-list {
  list-style-type: none;
  padding: 0;
}

.album-item {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
}

.album-link {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #3498db;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.album-link:hover {
  background-color: #2980b9;
}

.u-max-full-width {
  max-width: 100%;
  height: auto;
}

</style>
