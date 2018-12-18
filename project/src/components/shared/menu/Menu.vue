<template>
    <header class="navbar-dark bg-success">          
        <nav class="navbar container">
            <div class="col row">
                <div class="col-6">
                    <router-link class="navbar-brand" to="/">
                        LOGO
                    </router-link>
                </div>

                <div class="col-6 text-right">
                    <span 
                        class="open-menu menu-cursos-pointer p-2 d-block" 
                        @click="toggleMenu">
                        Open
                    </span>
                </div>
            </div>

            <ul 
                class="navbar-nav pb-2 pt-2"
                :class="menuActive">

                <li 
                    class="menu-cursos-pointer text-right mb-4 p-2"
                    @click="toggleMenu">
                    Close
                </li>

                <li 
                    class="nav-item active"
                    v-for="rota in rotas" :key="rota.id">

                    <router-link 
                        class="nav-link d-block p-2"
                        :to="rota.path ? rota.path : '/'">
                        {{ rota.titulo }}
                    </router-link>
                </li>
            </ul>

            <div 
                :class="bkg"
                @click="toggleMenu">
            </div>
        </nav>
    </header>
</template>

<script>
    export default {

        data() {
            return {

                visible: true,
                menuActive: 'menu-off',
                bkg: ''
            }
        },

        props: {

            rotas: {
                required: true,
                type: Array
            }
        },

        methods: {

            toggleMenu() {

                this.visible = !this.visible; 

                if(this.visible === false) {
                    
                    this.menuActive = 'menu-on';
                    this.bkg = 'menu-active-bkg';
                } else {

                    this.menuActive = 'menu-off';
                    this.bkg = '';
                }
                
            }
        }
    }
</script>

<style lang="scss">

    @import './menu.scss';
</style>
