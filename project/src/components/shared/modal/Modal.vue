<template>
    <section class="modal modal-open" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <header class="modal-header">
                    <h5 class="modal-title">{{ titulo }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </header>

                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                
                <footer class="modal-footer">
                    <button type="button" class="btn btn-success mr-2">Save changes</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
    props: {
        titulo: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    @import './scss/modal.scss';
</style>


