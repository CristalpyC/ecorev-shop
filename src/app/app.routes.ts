import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './pages/card/card.component';

export const routes: Routes = [
    {
        path: '',
        title: 'EcoRev',
        component: HomeComponent
    },
    {
        path: 'productos',
        title: 'EcoRev - shop',
        component: ProductsComponent
    },
];
