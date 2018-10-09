<template>
    <button 
        class="btn btn-light"
        :type="tipo"
        :class="estilo"
        @click="acao()">
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
            },
            remocao: {
                required: false,
                type: Boolean
            }
        },

        methods: {

            acao() {
                if(this.remocao) {
                    if(confirm('Deseja confirmar esse operação?')) {
    
                        this.$emit('acaoRemove');
                        return;
                    }
                };

                this.$emit('acao');
                return;
            }
        }
    }
</script>

<style lang="sass">
    @import './scss/buttons.scss';
</style>

