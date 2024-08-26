import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NventComponent } from './nvent/nvent.component';
import { ProjectsComponent } from './projects/projects.component';
import { OutriderComponent } from './outrider/outrider.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'research',
        component: ResearchComponent
    },
    {
        path: 'work-experience',
        component: WorkExperienceComponent
    },
    {
        path: 'work-experience-nvent',
        component: NventComponent
    },
    {
        path: 'work-experience-outrider',
        component: OutriderComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'certifications',
        component: CertificationsComponent
    },
];
