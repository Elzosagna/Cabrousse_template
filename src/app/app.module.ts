import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AccueilModule } from './accueil/accueil.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ActualitesComponent } from './actualites/actualites.component';
import { XewXewComponent } from './xew-xew/xew-xew.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ActualitesComponent,
        XewXewComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        AccueilModule,
        MDBBootstrapModule.forRoot(),
        CollapseModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
    NO_ERRORS_SCHEMA ]
})
export class AppModule { }
