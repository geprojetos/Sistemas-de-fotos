<template>
    <select name="" id="" class="form-control form-group select" @change="selecionado($event)">
        <option value="">Selecione uma categoria</option>
        <option 
            v-for="categoria in categorias" :key="categoria._id"
            :value="categoria.nome">
            {{ categoria.nome }}
        </option>
    </select>
</template>

<script>
    import CategoriaService from "../../../services/categoria/CategoriaService";

    export default {
        
        created() {
            
            this.service = new CategoriaService(this.$resource);

            this.service
                .list()
                .then( res => this.categorias = res )
                .catch( erro => console.log(erro) )
        },

        data() {

            return {
                categorias: []
            }
        },

        methods: {

            selecionado(e) {

                console.log(e);
                
                console.log('Mudou');
            }
        }
    }
</script>

<style lang="sass">
    @import './scss/select-categories.scss'
</style>

