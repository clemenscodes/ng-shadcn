import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-root',
    template: `
        <h1 class="my-0 py-0">Welcome to ng-shadcn</h1>
        <router-outlet />
    `,
})
export class AppComponent {
    title = 'web';
}
