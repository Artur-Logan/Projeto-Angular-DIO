import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';   
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/realese.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErroComponent } from './erro/erro.component';
import { CourseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    ErroComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'courses', component: CourseListComponent
        },{
          path: 'courses/info/:id', component: CourseInfoComponent
        },
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        ,
        {
          path: '**', component: ErroComponent  
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
