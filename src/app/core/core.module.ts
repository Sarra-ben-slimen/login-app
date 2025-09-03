import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
      imports: [HttpClientModule],
      providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
})
export class CoreModule
{
      constructor(@Optional() @SkipSelf() parentModule: CoreModule)
      {
            if (parentModule)
            {
                  throw new Error('Core module already moded . Import it in appModule only');
            }
      }
}