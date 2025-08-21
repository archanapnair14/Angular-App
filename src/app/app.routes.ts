import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';
import { PostList } from './components/post-list/post-list';
import { Productcomponent } from './components/productcomponent/productcomponent';
import { ProductDetail } from './components/product-detail/product-detail';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'form',component: Form},
    {path: 'post-list',component: PostList},
    {path: 'product',component:Productcomponent},
    {path:'product-detail/:id',component:ProductDetail},
    { path: 'login', component: Login }

    // {path: 'form',redirectTo: 'product',pathMatch: 'full'}
];
