<template>
    <section class="container pt-2">
        <ap-card
            v-for="foto in fotos" :key="foto._id"
            :url="foto.url"
            :title="foto.titulo"
            :description="foto.descricao">
        </ap-card>
    </section>
</template>

<script>
    import Card from '../shared/card/Card.vue';
    import FotoService from '../../services/foto/FotoService.js';

     export default {
          
        created() {

            this.service = new FotoService(this.$resource)

            const teste = this.service
                .list()
                .then( res => this.fotos = res )
        },

        data() {

            return {

                fotos: []
            }
        },

        components: {
            'ap-card': Card
        }
     }
</script>

<style scope>
     
</style>