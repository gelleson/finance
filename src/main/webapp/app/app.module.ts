import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FindepSharedModule } from 'app/shared/shared.module';
import { FindepCoreModule } from 'app/core/core.module';
import { FindepAppRoutingModule } from './app-routing.module';
import { FindepHomeModule } from './home/home.module';
import { FindepEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FindepSharedModule,
    FindepCoreModule,
    FindepHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FindepEntityModule,
    FindepAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class FindepAppModule {}
