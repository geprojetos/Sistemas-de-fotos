<template>
    <header class="navbar-dark bg-success">          
        <nav class="navbar container">
            <router-link class="navbar-brand" to="/"></router-link>

            <ul class="navbar-nav">
                <li 
                    class="nav-item active"
                    v-for="rota in rotas" :key="rota.id">

                    <router-link 
                        class="nav-link"
                        :to="rota.path ? rota.path : '/'">
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

<style lang="scss">

    @import './menu.scss';
    
</style>
