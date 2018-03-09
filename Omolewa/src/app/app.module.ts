import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';




import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { WeddingComponent } from './wedding.component';
import { PotraitsComponent } from './potraits.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'potraits', component: PotraitsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    WeddingComponent,
    PotraitsComponent,
    FileSelectDirective,
    


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
