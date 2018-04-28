import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTestRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterTestCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterTestLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterTestDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterTestTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterTestEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterTestJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterTestJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterTestRegionMySuffixModule,
        JhipsterTestCountryMySuffixModule,
        JhipsterTestLocationMySuffixModule,
        JhipsterTestDepartmentMySuffixModule,
        JhipsterTestTaskMySuffixModule,
        JhipsterTestEmployeeMySuffixModule,
        JhipsterTestJobMySuffixModule,
        JhipsterTestJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTestEntityModule {}
