<template>
    <header>          
        <h2>Menu</h2>     
        <nav>
            <ul>
                <li v-for="rota in rotas" :key="rota.id">
                    <router-link :to="rota.path ? rota.path : '/'">
                        {{ rota.titulo }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {

        props: {

            rotas: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
