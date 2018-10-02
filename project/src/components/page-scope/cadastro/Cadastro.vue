<template>
    <section class="container">
        <h1>Cadastro</h1>

        <form class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <img src="" alt="Imagem">
            </div>
            
            <div class="col-sm-12 col-md-6 col-lg-8">
                <fieldset>
                    <div class="form-group">
                        <label for="title">
                            Coloque um tíitulo para o card: 
                            <small>(obrigatório *)</small>
                        </label>

                        <input 
                            type="email" 
                            class="form-control" 
                            id="title" 
                            aria-describedby="url" 
                            placeholder="Digite o título aqui">
                        <small class="form-text text-danger">
                            Título obrigatório
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="url">
                            Coloque uma url para o card: 
                            <small>(obrigatória *)</small>
                        </label>

                        <input 
                            type="text" 
                            class="form-control" 
                            id="url" 
                            aria-describedby="url" 
                            placeholder="Digite a url aqui">
                        <small class="form-text text-danger">
                            Url obrigatório
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="description">
                            Coloque uma descrição para o card: 
                            <small>(obrigatória *)</small>
                        </label>

                        <textarea 
                            name="description" 
                            id="description"
                            class="form-control cadastro-description">
                        </textarea>
                        <small class="form-text text-danger">
                            Descrição obrigatória
                        </small>
                    </div>
                </fieldset>

                <fieldset>
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </fieldset>
            </div>
        </form>
    </section>    
</template>

<script>
    export default {

    }
</script>

<style lang="sass" scoped>
    @import './scss/cadastro.scss';
</style>
