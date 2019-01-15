<template>
    <div>
        <button class="btn btn-primary" @click.prevent="modalToggle()">Open modal</button>

        <section id="modal" class="modal" :class="modalOpen"  tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <header class="modal-header">
                        <h5 class="modal-title">Teste</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent="modalToggle()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </header>

                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    
                    <footer class="modal-footer">
                        <button type="button" class="btn btn-success mr-2">Save changes</button>
                        <button @click.prevent="modalToggle()" type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </footer>
                </div>
            </div>
        </section>

        <div :class="bkgModal" @click.prevent="modalToggle()"></div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            visible: false,
            modalOpen: '',
            bkgModal: ''
        }
    },

    props: {
        
    },

    methods: {

        modalToggle() {

            this.visible = !this.visible;

            if(this.visible === true) {
                this.modalOpen = 'modal-open',
                this.bkgModal = 'modal-bkg'
                
            } else {
                this.modalOpen = '',
                this.bkgModal = ''
            }
        }
    }
}
</script>

<style lang="scss">
    @import './scss/modal.scss';
</style>


