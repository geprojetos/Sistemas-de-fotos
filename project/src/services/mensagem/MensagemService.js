export default class MensagemService {

    listError() {

        return 'Não foi possível buscar as fotos do serviço, tente novamente ou procure o administrador do site';
    }

    addSuccess() {

        return 'Foto cadastrado com sucesso';
    }

    addError() {

        return 'Não foi possível cadastrar a sua novo foto, tente novamente ou procure o administrador do site';
    }

    updateSuccess() {

        return 'Foto atualizada com sucesso';
    }

    updateError() {

        return 'Não foi possível alterar a foto, tente novamente ou procure o administrador do site';
    }

    removeSuccess() {

        return 'Foto removida com sucesso';
    }

    removeError() {

        return 'Não foi possível remover a foto, tente novamente ou procure o administrador do site';
    }

    categoriesSuccess() {

        return 'Grupos listados com sucesso';
    }

    categoriesError() {

        return 'Não foi possível listas os grupos';
    }

    classSuccess() {

        return 'alert-success';
    }

    classError() {

        return 'alert-danger';
    }
}