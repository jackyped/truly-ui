import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';

import { SplitButtonDemoComponent } from './splitbuttondemo.component';
import { SplitButtonDemoRoutingModule } from './splitbuttondemo-routing.module';
import { SplitButtonModule } from '../../../components/splitbutton';
import { ModalService } from '../../../components/modal';
import { ShowcaseTableEventsModule } from '../../shared/components/showcase-table-events/showcase-table-events.module';
import { ShowcaseCardModule } from '../../shared/components/showcase-card/showcase-card.module';
import { ShowcaseTablePropertiesModule } from '../../shared/components/showcase-table-properties/showcase-table-properties.module';


@NgModule({
  declarations: [
    SplitButtonDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HighlightJsModule,
    SplitButtonDemoRoutingModule,
    SplitButtonModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule,
  ],
  exports: [
    SplitButtonDemoComponent
  ],
  providers: [
    ModalService
  ]
})
export class SplitButtonDemoModule { }
