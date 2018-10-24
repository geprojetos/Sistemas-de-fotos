<template>
    <section class="container">

        <ap-message
         :estilo="classe"
         :message="message"
         @close="closeMessage" />

        <section class="row">
            <div class="col-sm-12 col-mg-6 col-lg-4 col-xl-4">
                <ap-search @filtro="recebeValorFiltro($event)"  />
            </div>
        </section>

        <section class="row">
            <div 
                class="col-sm-12 col-md-6 col-lg-4 col-xl-3" 
                v-for="foto in listaFotos" :key="foto._id">
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
        </section>
    </section>
</template>

<script>
    import CardBase from '../card-base/CardBase';
    import FotoService from '../../../../services/foto/FotoService';
    import Button from '../../button/Button';
    import Message from '../../message/Message';
    import Search from '../../search/Search';

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
                classe: '',
                filtro: ''
            }
        },

        components: {
            'ap-card': CardBase,
            'ap-button': Button,
            'ap-message': Message,
            'ap-search': Search
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
            },

            recebeValorFiltro(e) {

                this.filtro = e;
            }
        },

        computed: {

            listaFotos() {

                let exp = new RegExp(this.filtro.trim(), 'i');

                if(this.filtro) {

                    return this.fotos.filter(foto => exp.test(foto.titulo))
                };

                return this.fotos;
            }
        }
    }    
</script>

<style lang="sass" scoped>

</style>

