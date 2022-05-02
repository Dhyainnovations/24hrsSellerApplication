import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signinpage',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'signuppage',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'myproducts',
    loadChildren: () => import('./myproducts/myproducts.module').then(m => m.MyproductsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'sellerdetailpage',
    loadChildren: () => import('./sellerdetails/sellerdetails.module').then(m => m.SellerdetailsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./splashscreen/splashscreen.module').then(m => m.SplashscreenPageModule)
  },
  {
    path: 'myproductEditPage',
    loadChildren: () => import('./myproduct-edit/myproduct-edit.module').then(m => m.MyproductEditPageModule)
  },
  {
    path: 'addofferEditPage',
    loadChildren: () => import('./addoffer-edit/addoffer-edit.module').then(m => m.AddofferEditPageModule)
  },
  {
    path: 'terms-and-condition',
    loadChildren: () => import('./terms-and-condition/terms-and-condition.module').then(m => m.TermsAndConditionPageModule)
  },
  {
    path: 'social-media-details',
    loadChildren: () => import('./social-media-details/social-media-details.module').then(m => m.SocialMediaDetailsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/otpverification.module').then(m => m.OtpverificationPageModule)
  },
  {
    path: 'frequently-asked-questions',
    loadChildren: () => import('./frequently-asked-questions/frequently-asked-questions.module').then(m => m.FrequentlyAskedQuestionsPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'searchpage',
    loadChildren: () => import('./productsearch/productsearch.module').then(m => m.ProductsearchPageModule)
  },
  {
    path: 'offersearch',
    loadChildren: () => import('./offersearch/offersearch.module').then(m => m.OffersearchPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'add-product-offer',
    loadChildren: () => import('./add-product-offer/add-product-offer.module').then(m => m.AddProductOfferPageModule)
  },
  {
    path: 'show-product-image',
    loadChildren: () => import('./show-product-image/show-product-image.module').then(m => m.ShowProductImagePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }