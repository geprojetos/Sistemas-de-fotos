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

                    <ap-button 
                    tipo="button"
                    name="Remover"
                    estilo="btn-danger btn-block"
                    @acaoRemove="remover(foto)"
                    :remocao="true" />
                </ap-card>
            </div>
        </div>
    </section>
</template>

<script>
    import CardBase from '../card-base/CardBase';
    import FotoService from '../../../../services/foto/FotoService';
    import Button from '../../button/Button';

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
            'ap-card': CardBase,
            'ap-button': Button
        },

        methods: {

            remover(foto) {

                this.service
                    .remove(foto._id)
                    .then( () => {

                        alert('Foto removida com sucesso');
                        let indice = this.fotos.indexOf(foto);
                        this.fotos.splice(indice, 1);
                    }, erro => {
                        console.log(erro)
                    });
            }            
        }
    }    
</script>

<style lang="sass" scoped>

</style>

