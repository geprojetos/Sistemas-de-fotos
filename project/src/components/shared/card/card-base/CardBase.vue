<template>
    <section class="card">
        <img 
            class="img-thumbnail img-card" 
            :src="url" 
            :alt="description"
            :title="description">

        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
            <p class="card-text">
                {{ description }}
            </p>
            
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {

        props: {
            title: {
                required: true,
                type: String
            },
            url: {
                required: true,
                type: String
            },
            description: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped lang="sass">

    @import './css/card.css';
</style>
