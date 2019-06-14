import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
// import { LandingComponent } from './examples/landing/landing.component';
// import { LoginComponent } from './examples/login/login.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { XewXewComponent } from './xew-xew/xew-xew.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: AccueilComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    { path: 'xew-xew',       component: XewXewComponent },
    { path: 'actualites',           component: ActualitesComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
