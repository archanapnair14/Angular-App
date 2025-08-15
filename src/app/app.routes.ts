import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';
import { PostList } from './components/post-list/post-list';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'form',component: Form},
    {path: 'post-list',component: PostList}
];
