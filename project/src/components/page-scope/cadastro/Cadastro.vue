<template>
    <section class="container">
        <h1>Cadastro</h1>
        <h3>{{ foto.titulo }}</h3>

        <form 
            class="row"
            @submit.prevent="salvar()"
            name="formCadastro">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <img
                    class="img-thumbnail"
                    v-show="foto.url"
                    :src="foto.url" 
                    :alt="foto.titulo"
                    :title="foto.descricao">
            </div>
            
            <div class="col-sm-12 col-md-6 col-lg-8">
                <fieldset>
                    <div class="form-group">
                        <label for="title">
                            Coloque um tíitulo para o card: 
                            <small>(obrigatório *)</small>
                        </label>

                        <input 
                            type="text" 
                            class="form-control" 
                            id="title" 
                            name="title"
                            aria-describedby="url" 
                            placeholder="Digite o título aqui"
                            v-validate="{ required: true, min:3, max:20 }" 
                            data-vv-as="Título"
                            v-model="foto.titulo">
                        <small 
                            class="form-text text-danger"
                            v-show="errors.has('title')">
                            {{ errors.first('title') }}
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
                            name="url"
                            aria-describedby="url" 
                            placeholder="Digite a url aqui"
                            v-validate="{ required: true }" 
                            data-vv-as="Url"
                            v-model.lazy="foto.url">
                        <small 
                            class="form-text text-danger"
                            v-show="errors.has('url')">
                            {{ errors.first('url') }}
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
                            class="form-control cadastro-description"
                            v-validate="{ required: true, min:4, max:200 }" 
                            data-vv-as="Descrição"
                            v-model="foto.descricao">
                        </textarea>
                        <small 
                            class="form-text text-danger"
                            v-show="errors.has('description')">
                            {{ errors.first('description') }}
                        </small>
                    </div>
                </fieldset>

                <fieldset>
                    <button 
                        type="submit" 
                        class="btn btn-primary">
                            Salvar
                    </button>
                </fieldset>
            </div>
        </form>
    </section>    
</template>

<script>
    import Foto from '../../../models/foto/FotoModel';
    import FotoService from '../../../services/foto/FotoService';

    export default {

        created() {
            
            this.service = new FotoService(this.$resource);

            if(this.id) {

                this.service
                    .query(this.id)
                    .then(res => this.foto = res)
            }
        },

        data() {
            return {

                foto: new Foto(),
                id: this.$route.params.id
            }
        },

        methods: {

            salvar() {

                this.service
                    .save(this.foto)
                    .then(() => {

                        alert('Foto Cadastrada com sucesso')

                        setTimeout(() => {
                            if(confirm("Deseja cadastrar um nova foto?")) {
                                this.foto = new Foto();
                                return;
                            }

                            this.$router.push({ name: 'home' });
                            return;
                        },300)
                    }, erro => console.log(erro))
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './scss/cadastro.scss';
</style>
