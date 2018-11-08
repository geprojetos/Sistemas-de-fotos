<template>
    <select :name="name" :id="id" class="form-control form-group select" @change="selecionado($event.target.value)">
        <option value="">Selecione uma categoria</option>
        <option 
            v-for="categoria in categorias" :key="categoria._id"
            :value="categoria.nome"
            v-if="categoria.nome ? 'selected' : 'teste'">
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

        props: {
            name: {
                required: false,
                type: String
            },
            id: {
                required: false,
                type: String
            }
        },

        data() {

            return {
                categorias: []
            }
        },

        methods: {

            selecionado(e) {
                this.$emit('valorSelecionado', e)                
            }
        }
    }
</script>

<style lang="sass">
    @import './scss/select-categories.scss'
</style>

