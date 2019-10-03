import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import {
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzModalModule,
    NzDrawerModule,
    NzListModule,
    NzSelectModule,
    NzNotificationService,
    NzNotificationModule,
    NzTabsModule,
    NzDatePickerModule,
    NzCalendarModule,
    NzMessageService,
    NzPopconfirmModule,
    NzPageHeaderModule,
    NzStatisticModule,
    NzStepsModule,
    NzDescriptionsModule,
    NzAlertModule,
    NzPopoverModule,
    NzRadioModule,
    NzAutocompleteModule} from 'ng-zorro-antd';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MomentModule,
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        NzButtonModule,
        NzIconModule,
        NzFormModule,
        NzCardModule,
        NzInputModule,
        NzDividerModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzTableModule,
        NzDrawerModule,
        NzListModule,
        NzSelectModule,
        NzNotificationModule,
        NzTabsModule,
        NzDatePickerModule,
        NzCalendarModule,
        NzPopconfirmModule,
        NzPageHeaderModule,
        NzStatisticModule,
        NzStepsModule,
        NzDescriptionsModule,
        NzAlertModule,
        NzPopoverModule,
        NzRadioModule,
        NzAutocompleteModule,
        MomentModule,
        CKEditorModule,
    ],
})
export class SharedModule { }
