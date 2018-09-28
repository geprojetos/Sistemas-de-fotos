export default class MensagemService {

    listError() {

        return 'Não foi possível buscar os cards do serviço, tente novamente ou procure o administrador do site';
    }

    addSuccess() {

        return 'Card cadastrado com sucesso';
    }

    addError() {

        return 'Não foi possível cadastrar o seu novo card, tente novamente ou procure o administrador do site';
    }

    updateSuccess() {

        return 'Card atualizado com sucesso';
    }

    updateError() {

        return 'Não foi possível alterar o card, tente novamente ou procure o administrador do site';
    }

    removeSuccess() {

        return 'Card removido com sucesso';
    }

    removeError() {

        return 'Não foi possível remover o card, tente novamente ou procure o administrador do site';
    }

    classSuccess() {

        return 'alert alert-success';
    }

    classSuccess() {

        return 'alert alert-success';
    }

    classError() {

        return 'alert alert-danger';
    }
}