import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { JournalyceeComponent } from './journalycee/journalycee.component';
import { ExerciceComponent } from './exercice/exercice.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: AccueilComponent },
    { path: 'journalycee',          component: JournalyceeComponent },
    { path: 'exercice',     component: ExerciceComponent },
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
