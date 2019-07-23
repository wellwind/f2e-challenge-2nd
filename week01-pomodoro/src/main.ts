import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}




const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('/ngsw-worker.js').then(reg => {
    });
  }
};

const startUp = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(_ => { registerServiceWorker(); })
    .catch(err => console.error(err));
};


startUp();
