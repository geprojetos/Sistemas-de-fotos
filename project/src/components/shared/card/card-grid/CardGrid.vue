<template>
    <section class="container">
        <div class="row">
            <div 
                class="col-sm-12 col-md-6 col-lg-4 col-xl-3" 
                v-for="foto in fotos" :key="foto._id">
                <ap-card    
                    :url="foto.url"
                    :title="foto.titulo"
                    :description="foto.descricao">

                    <slot></slot>
                </ap-card>
            </div>
        </div>
    </section>
</template>

<script>
    import CardBase from '../card-base/CardBase';
    import FotoService from '../../../../services/foto/FotoService';

    export default {

        created() {

            this.service = new FotoService(this.$resource)

            this.service
                .list()
                .then( res => this.fotos = res )
        },

        data() {

            return {

                fotos: []
            }
        },

        components: {
            'ap-card': CardBase
        }
    }    
</script>

<style lang="sass" scoped>

</style>

