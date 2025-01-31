import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

export const routes: Routes = [
  {
    title: 'Web Quiz - Home',
    component: HomeComponent,
    path: '',
  },
  {
    title: 'Web Quiz - Login',
    component: LoginComponent,
    path: 'login',
  },
  {
    title: 'Web Quiz - Registro',
    component: RegistroComponent,
    path: 'registro',
  },
  {
    title: 'Web Quiz - Quiz',
    component: QuizComponent,
    path: 'quiz',
  },
  {
    title: 'Web Quiz - Resultado',
    component: ResultadoComponent,
    path: 'resultado',
  },
];
