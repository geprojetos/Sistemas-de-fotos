<template>
   <ap-card-grid>
       <ap-button 
        tipo="button"
        name="Remover"
        estilo="btn-danger btn-block" />
   </ap-card-grid>
</template>

<script>
    import CardGrid from '../../shared/card/card-grid/CardGrid';
    import Button from '../../shared/button/Button';

    export default {
          
        components: {
            'ap-card-grid': CardGrid,
            'ap-button': Button
        }
    }
</script>

<style scope>
     
</style>