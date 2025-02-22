import { Routes } from '@angular/router';
import { FxComponent } from './fx/fx.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

export const routes: Routes = [
    {
        path: '',
        component: FxComponent
    },
    {
        path: 'disclaimer',
        component: DisclaimerComponent
    },
    {
        path: 'terms-of-use',
        component: TermsOfUseComponent
    }
];
