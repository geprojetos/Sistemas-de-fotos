import MensagemService from '../mensagem/MensagemService';

export default class FotoService {

    constructor(resource) {

        this._resource = resource('v1/fotos{/id}');
        this._message = new MensagemService();
    }

    list() {

        return this._resource
            .query()
            .then( res => res.json()
                    ,erro => {

                        console.log(erro);

                        return {
                            text: this._message.listError(),
                            class: this._message.classError()
                        }
                });
    };

    save(foto) {

        if(foto._id) {

            return this._resource
                .update({ id: foto._id }, foto)
                .then( () => {

                    return {
                            text: this._message.updateSuccess(),
                            class: this._message.classSuccess() 
                        }
                }, erro => {

                    console.log(erro);
                    
                    return {
                        text: this._message.updateError(),
                        class: this._message.classError() 
                    }
                })
        } else {

            return this._resource
                .save(foto)
                .then( () => {

                    return {
                        text: this._message.addSuccess(),
                        class: this._message.classSuccess()
                    }
                }, erro => {

                        console.log(erro);
                        
                        return {
                            text: this._message.addSuccess(),
                            class: this._message.classSuccess()
                        }
                    }
                )
        }
    };

    query(id) {

        return this._resource
            .query({ id })
            .then( res => res.json(), erro => console.log(erro) )
    }

    remove(id) {

        return this._resource
            .delete({id})
            .then( () => {

                return {
                    text: this._message.removeSuccess(),
                    class: this._message.classSuccess()
                }
            }, erro => {

                console.log(erro);

                return {
                    text: this._message.removeError(),
                    class: this._message.classError()
                }
            });
    }
}