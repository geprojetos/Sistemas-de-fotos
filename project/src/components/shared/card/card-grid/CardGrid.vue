<template>
    <section class="container">

        <ap-message
         :estilo="classe"
         :message="message"
         @close="closeMessage" />

        <div class="row">
            <div 
                class="col-sm-12 col-md-6 col-lg-4 col-xl-3" 
                v-for="foto in fotos" :key="foto._id">
                <ap-card    
                    :url="foto.url"
                    :title="foto.titulo"
                    :description="foto.descricao">

                    <router-link :to="{ name: 'alteracao', params: { id: foto._id } }" 
                        class="btn btn-primary btn-block">
                        Alterar
                    </router-link>

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
    import Message from '../../message/Message';

    export default {

        created() {

            this.service = new FotoService(this.$resource)

            this.service
                .list()
                .then( 
                    res => this.fotos = res
                    ,erro => {

                        this.message = erro.text;
                        this.class = erro.class;
                })
        },

        data() {

            return {

                fotos: [],
                message: '',
                classe: ''
            }
        },

        components: {
            'ap-card': CardBase,
            'ap-button': Button,
            'ap-message': Message
        },

        methods: {

            remover(foto) {

                this.service
                    .remove(foto._id)
                    .then( res => {

                        let indice = this.fotos.indexOf(foto);
                        this.fotos.splice(indice, 1);

                        this.message = res.text;
                        this.classe = res.class;
                    }, erro => {

                        console.log(erro)
                        this.message = erro.text;
                        this.classe = erro.class;
                    });
            },

            closeMessage() {

                this.message = '';
            }
        }
    }    
</script>

<style lang="sass" scoped>

</style>

