import Home from './components/page-scope/home/Home.vue';
const Cadastro = () => System.import('./components/page-scope/cadastro/Cadastro.vue');

export const appRouter = [

    {
        path: '',
        component: Home,
        name: 'home',
        titulo: 'Home',
        menu: true
    },
    {
        path: '/cadastro',
        component: Cadastro,
        name: 'cadastro',
        titulo: 'Cadastro',
        menu: true
    },
    {
        path: '/cadastro/:id',
        component: Cadastro,
        name: 'alteracao',
        titulo: 'Alteração',
        menu: false
    }
]