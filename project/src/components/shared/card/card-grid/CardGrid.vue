<template>
    <section class="container">

        <ap-message
         :estilo="classe"
         :message="message"
         @close="closeMessage" />

        <section class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <ap-search @filtro="recebeValorFiltro($event)"  />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <ap-select @valorSelecionado="valorSelecionado($event)" />
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
    import SelectCategories from '../../select/SelectCategories';

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
                filtro: '',
                categoria: ''
            }
        },

        components: {
            'ap-card': CardBase,
            'ap-button': Button,
            'ap-message': Message,
            'ap-search': Search,
            'ap-select': SelectCategories
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
            },

            valorSelecionado(e) {

                this.categoria = e;
            }
        },

        computed: {

            listaFotos() {

                let search = new RegExp(this.filtro.trim(), 'i');
                let selected = new RegExp(this.categoria.trim(), 'i');

                if(this.filtro) {
                    
                    return this.fotos.filter(foto => {
                        
                        if(search.test(foto.titulo) || search.test(foto.descricao)) {

                            return foto
                        } 
                    })
                };

                if(this.categoria) {
                    
                    return this.fotos.filter(categoria => {
                        
                        if(selected.test(categoria.categoria)) {
                            
                            return categoria;
                        }
                    })
                }

                return this.fotos;
            }
        }
    }    
</script>

<style lang="sass" scoped>

</style>

