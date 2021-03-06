import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NgtestModule } from '@freshtest/ngtest';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, NgtestModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
