<template>
    <p 
        v-show="message"
        class="alert alert-light" 
        :class="estilo">
        {{ message }}

        <button type="button" class="close" aria-label="Fechar" @click.prevent="close">
            <span aria-hidden="true">&times;</span>
        </button>
    </p>
</template>

<script>
    export default {

        props: {
            estilo: {
                required: false,
                type: String
            },
            message: {
                required: true,
                type: String
            }
        },

        methods: {
            
            close() {

                this.$emit('close')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './scss/message.scss'
</style>
