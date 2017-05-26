import PageListResponsivePages from './pages/page-list-responsive-pages.vue';
import PageCreateResponsivePage from './pages/page-create-responsive-page.vue';
import PageEditResponsivePage from './pages/page-edit-responsive-page.vue';

const routes = [
    {path: '/', component: PageListResponsivePages},
    {path: '/create-page', component: PageCreateResponsivePage},
    {path: '/edit-page/:id', component: PageEditResponsivePage}
];

export default routes;