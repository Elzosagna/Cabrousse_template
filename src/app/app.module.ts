import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AccueilModule } from './accueil/accueil.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ActualitesComponent } from './actualites/actualites.component';
import { JournalyceeComponent } from './journalycee/journalycee.component';
import { ExerciceComponent } from './exercice/exercice.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ActualitesComponent,
        JournalyceeComponent,
        ExerciceComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        AccueilModule,
        CollapseModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
