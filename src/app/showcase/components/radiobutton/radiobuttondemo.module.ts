import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RadioButtonDemoComponent } from './radiobuttondemo.component';
import { RadioButtonDemoRoutingModule } from './radiobuttondemo-routing.module';
import { HighlightJsModule } from 'ngx-highlight-js';
import { RadioButtonModule } from '../../../components/radiobutton';
import {ShowcaseCardModule} from '../../shared/components/showcase-card/showcase-card.module';
import {ShowcaseTablePropertiesModule} from '../../shared/components/showcase-table-properties/showcase-table-properties.module';
import {ShowcaseTableEventsModule} from '../../shared/components/showcase-table-events/showcase-table-events.module';

@NgModule({
  declarations: [
    RadioButtonDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HighlightJsModule,
    RadioButtonDemoRoutingModule,
    RadioButtonModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule,
  ],
  exports: [
    RadioButtonDemoComponent
  ]
})
export class RadioButtonDemoModule {}
