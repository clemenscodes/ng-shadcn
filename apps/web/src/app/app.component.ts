import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
    standalone: true,
    imports: [RouterModule, HlmButtonDirective],
    selector: 'app-root',
    template: `
        <h1>Welcome to ng-shadcn</h1>
        <button hlmBtn>Button</button>
        <router-outlet />
    `,
})
export class AppComponent {
    title = 'web';
}
