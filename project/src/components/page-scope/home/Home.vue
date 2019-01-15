<template>
    <div>
        <ap-modal 
            modal="opa"
        />
        <ap-card-grid />
    </div>
</template>

<script>
    import CardGrid from '../../shared/card/card-grid/CardGrid';
    import Modal from '../../shared/modal/Modal';

    export default {
          
        components: {
            'ap-card-grid': CardGrid,
            'ap-modal': Modal
        }
    }
</script>