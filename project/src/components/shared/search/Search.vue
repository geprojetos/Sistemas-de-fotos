<template>
    <form class="form">
        <div class="form-group">
            <input 
                type="search" 
                class="form-control" 
                placeholder="Pesquisar"
                @input="valorFiltro(filtro = $event.target.value)">
        </div>
    </form>
</template>

<script>
    export default {

        data() {
            return {
                filtro: ''
            }
        },

        methods: {
            valorFiltro() {

                this.$emit('filtro', this.filtro)
            }
        }
    }
</script>

<style lang="sass">
    @import './scss/search.scss'
</style>

