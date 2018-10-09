<template>
    <button 
        class="btn btn-light"
        :type="tipo"
        :class="estilo">
        {{ name }}
    </button>
</template>

<script>
    export default {

        props: {
            tipo: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            estilo: {
                required: false,
                type: String
            }
        }
    }
</script>

<style lang="sass">
    @import './scss/buttons.scss';
</style>

