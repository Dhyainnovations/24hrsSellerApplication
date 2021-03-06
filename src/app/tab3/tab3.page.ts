import { Component, ElementRef, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  @ViewChild('catSelect') catSelect: ElementRef;
  @ViewChild('subSelect') subSelect: ElementRef;

  constructor(public loadingCtrl: LoadingController, public popoverController: PopoverController, private router: Router, private http: HttpService,
    private toastCtrl: ToastController, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private https: HttpClient) {
    route.params.subscribe(val => {
      this.sellerAllDetails();
      this.PopupModel = false;
      this.subcategoryPopupModel = false;
    });

    this.route.queryParams.subscribe(queryParams => {
      this.galleryImage = queryParams['selectedProductImageTbid'];
      if (this.galleryImage) {
        this.logoUploadCheck = true;
      }
    });
  }

  ngOnInit() {


  }
  galleryImage: any;
  selectedProductImageTbid: any;
  store_categoryCheck: any;
  resProject: any[];
  searchTerm: string;
  employees = [];
  imageSize: any;
  selectedFile: File = null;
  logoUploadCheck: any;
  idproofcheck: any;
  OnlyIfCategorySelected: any = true;
  addressproofcheck: any;
  descrptionAvailable: any;
  unitAvailable: any;
  CostAvailable: any;
  image: any;
  weightavailable: any;
  category_tbid_check: any;
  Subcategory_tbid_check: any;
  productName_check: any;
  subcategory_tbid: any = "";
  category_tbid: any = " ";
  makeTrueCall: any
  userdetails: any = localStorage.getItem("tbid");
  public date: string = new Date().toISOString();
  Category: any = '';
  subcategory: any = '';
  productname: any = '';
  description: any = '';
  cost: any = ''
  weight: any = '';
  categoryName: any = '';
  subcategoryName: any = '';
  categoryList: any = [];
  subcategoryList: any = [];
  unitList: any = [
    "kg (Kilograms)",
    "g (Grams)",
    "pc (Piece)",
    'bag ',
    "dz (Dozen)",
    "box (Box)",
    "ltr",
    "ml (MilliLitre)",
    "m (Meter)",
    "cm (Centimeter)",
    "km (Kilometres)",
    "mg (MilliGrams)",
    "in (Inches)",
    "ft (Feet)",
    "lb (Pounds)",

  ]
  PopupModel: any = false;
  subcategoryPopupModel: any = false;
  subCategoryNotfound = false;
  productImagecheck: any;








  async getPicture() {
    let imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    let base64Image = 'data:image/jpeg;base64,' + imgUrl;
    console.log(base64Image);
    alert(imgUrl)
    this.http.post('/processImage', { dataUrl: base64Image }).subscribe((response: any) => {
      console.log(response);
      alert("hello")

    }, (error: any) => {
      console.log(error);
    }
    );
  }






  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }


  //Upload Product Image
  MediaFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile);

    var imageSize = event.target.files[0].size;
    if (imageSize > 5242880) {
      this.imageSize = true;
      this.logoUploadCheck = false;

    } else {
      this.imageSize = false;
      this.logoUploadCheck = true;
      this.productImagecheck = false;
    }
  }

  redirecttoGallery() {
    if (this.subcategory_tbid) {
      this.router.navigate(['/show-product-image'], { queryParams: { productname: this.subcategory_tbid } });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Kindly Select Subcategory'
      })
    }
  }


  //PopUpModel Show-Hide / True-False
  backToprivious() {
    this.PopupModel = false;
    this.Category = ''
  }

  ScBackToprivious() {
    this.subcategoryPopupModel = false;
    this.subcategory = ''
  }

  visibleCategoryPopup() {
    this.PopupModel = true;
  }

  visibleSubCategoryPopup() {
    this.subcategoryPopupModel = true;
  }


  popupModelsubcategory(data) {
    if (data.subcategory == "subcategoryPopup") {
      this.subcategoryPopupModel = true;
    }
    this.Subcategory_tbid_check = false;
    this.subcategory_tbid = data.subcategory
  }


  //Navigate To MyProducts
  addproduct() {
    this.router.navigate(['/myproducts'])
  }

  //Create New Category
  createCategory() {
    const catData = {
      category_name: this.categoryName
    }
    this.http.postFormData('/create_category', catData).subscribe((response: any) => {
      if (response.success == "true") {
        this.Category = ''
        this.getCategoryList()

        var obj = {
          store_category_id: this.store_category_id
        }

        this.http.post('/list_category', obj).subscribe((response: any) => {
          this.categoryList = response.records;
          for (var i = 0; i < this.categoryList.length; i++) {
            if (this.categoryList[i].category == this.categoryName) {
              this.catSelect.nativeElement.value = this.categoryList[i].tbid;
              // this.catSelect.nativeElement.change() 
              this.catSelect.nativeElement.dispatchEvent(new Event('change'))
              this.categoryName = ''
            }
          }

        }, (error: any) => {
          console.log(error);
        }
        );

        this.PopupModel = false;
      }
    }, (error: any) => {
      console.log(error);

    }
    );

  }

  //Create New Sub Category
  createSubcategory() {
    const subcatData = {
      category_id: this.category_tbid,
      subcategory_name: this.subcategoryName
    }

    this.http.postFormData('/create_subcategory', subcatData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.subcategoryPopupModel = false;
        const obj = {
          category_id: this.category_tbid,
          store_category_id: this.store_category_id
        }
        this.http.post('/list_subcategory', obj).subscribe((response: any) => {
          console.log(this.subcategoryList);


          this.subcategoryList = response.records
          console.log(this.subcategoryList);

          // for (var i = 0; i < this.subcategoryList.length; i++) {
          //   if (this.subcategoryList[i].subsubcategory == this.subcategoryName) {
          //     alert("hai")
          //     console.log(this.subcategoryList[i].tbid);
          //     this.subSelect.nativeElement.value = this.subcategoryList[i].tbid;
          //     console.log(this.subSelect.nativeElement.value + ',' + this.subcategoryList[i].tbid);
          //     this.subSelect.nativeElement.dispatchEvent(new Event('change'))
          //     this.subcategoryName = ''
          //   }
          // }

          this.subCategoryNotfound = false;

        }, (error: any) => {
          console.log(error);
          this.subCategoryNotfound = true;
          this.subcategoryList = [];
        }
        );
      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }


  //FormData Inital Call
  makeTrue() {
    this.makeTrueCall = true
  }




  //List SubCategory Based On Category
  popupModel(data) {
    const formdata = new FormData();
    formdata.append("category", data.category);
    console.log(data.category);
    this.category_tbid = data.category
    this.category_tbid_check = false;
    this.OnlyIfCategorySelected = false;
    const obj = {
      category_id: this.category_tbid,
      store_category_id: this.store_category_id
    }
    this.http.post('/list_subcategory', obj).subscribe((response: any) => {
      console.log(response.records);
      this.subcategoryList = response.records
      console.log(this.subcategoryList);
      this.subCategoryNotfound = false;

    }, (error: any) => {
      console.log(error);
      this.subCategoryNotfound = true;
      this.subcategoryList = [];
    }
    );
  }







  //Get Category List
  getCategoryList() {
    var obj = {
      store_category_id: this.store_category_id
    }
    this.http.post('/list_category', obj).subscribe((response: any) => {
      this.categoryList = response.records
    }, (error: any) => {
      console.log(error);
    }
    );
  }



  productnameBind: any;
  //Make Error False
  ProductNAmeAvailableCheck() {
    this.productName_check = false

  }

  UnitAvailableCheck() {
    this.unitAvailable = false;
  }
  CostAvailableCheck() {
    this.CostAvailable = false;
  }

  DescriptionAvailableCheck() {
    this.descrptionAvailable = false;
  }

  WeightAvailableCheck() {
    this.weightavailable = false;
  }



  //Create New Product
  onClickSubmit(data) {

    if (this.store_categoryCheck == false) {
      if (this.makeTrueCall == true) {
        if (this.selectedFile) {
          this.galleryImage = null
        }
        var str = data.unit;
        console.log(data.unit);

        var splittedUnit = str.split(" ", 1);
        console.log(splittedUnit)
        this.image = this.selectedFile;
        console.log(this.image)


        if (this.galleryImage) {

          this.selectedFile = null
          const formdata = new FormData();
          formdata.append("category_id", this.category_tbid);
          formdata.append("subcategory_id", this.subcategory_tbid);
          formdata.append("product_name", data.product_name);
          formdata.append("cost", data.cost);
          formdata.append("unit", splittedUnit);
          formdata.append("description", data.description);
          formdata.append("product_image_url", "http://localhost/24Hrs/images/seller/product/" + this.galleryImage);
          formdata.append("weight", data.weight)
          console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
          console.log(this.subcategory_tbid.length);
          console.log(this.subcategory_tbid.length);
          if (this.subcategory_tbid.length <= 0) {
            this.Subcategory_tbid_check = true
            this.category_tbid_check = true;
          } else {
            this.Subcategory_tbid_check = false
            this.category_tbid_check = false;
          }


          if (data.product_name) {
            if (data.product_name.length <= 0) {
              this.productName_check = true
            } else {
              this.productName_check = false
            }
          } else {
            this.productName_check = true
          }



          if (data.cost.length <= 0) {
            this.CostAvailable = true
          } else {
            this.CostAvailable = false
          }
          if (data.unit.length <= 0) {
            this.unitAvailable = true
          } else {
            this.unitAvailable = false
          }
          if (data.description.length <= 0) {
            this.descrptionAvailable = true
          } else {
            this.descrptionAvailable = false
          }
          if (data.weight.length <= 0) {
            this.weightavailable = true
          } else {
            this.weightavailable = false
          }

          if (this.galleryImage == null) {
            this.productImagecheck = true
          } else {
            this.productImagecheck = false
          }

          if (this.Subcategory_tbid_check == false && this.productName_check == false && this.CostAvailable == false && this.unitAvailable == false && this.weightavailable == false
            && this.productImagecheck == false) {
            this.http.postFormData("/product_gallery_create", formdata).subscribe((response: any) => {
              this.router.navigate(['/myproducts']);
              console.log(response);
              if (response.success == "true") {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                Toast.fire({
                  icon: 'success',
                  title: 'Product Added Successfully '
                })
                setTimeout(() => {
                  location.reload();
                }, 10);
              }

            }, (error: any) => {
              console.log(error);
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Product Already Exist'
              })
            }
            );
          }
        } else {

          const formdata = new FormData();
          formdata.append("category_id", this.category_tbid);
          formdata.append("subcategory_id", this.subcategory_tbid);
          formdata.append("product_name", data.product_name);
          formdata.append("cost", data.cost);
          formdata.append("unit", splittedUnit);
          formdata.append("description", data.description);
          formdata.append("product_image", this.image);
          formdata.append("weight", data.weight)
          console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));

          console.log(this.subcategory_tbid.length);

          console.log(this.subcategory_tbid.length);

          if (this.subcategory_tbid.length <= 0) {
            this.Subcategory_tbid_check = true
            this.category_tbid_check = true;
          } else {
            this.Subcategory_tbid_check = false
            this.category_tbid_check = false;
          }

          if (data.product_name) {
            if (data.product_name.length <= 0) {
              this.productName_check = true
            } else {
              this.productName_check = false
            }
          } else {
            this.productName_check = true
          }
          if (data.cost.length <= 0) {
            this.CostAvailable = true
          } else {
            this.CostAvailable = false
          }
          if (data.unit.length <= 0) {
            this.unitAvailable = true
          } else {
            this.unitAvailable = false
          }

          if (data.description.length <= 0) {
            this.descrptionAvailable = true
          } else {
            this.descrptionAvailable = false
          }
          if (data.weight.length <= 0) {
            this.weightavailable = true
          } else {
            this.weightavailable = false
          }

          if (this.image == null) {
            this.productImagecheck = true
          } else {
            this.productImagecheck = false
          }
          if (this.Subcategory_tbid_check == false && this.productName_check == false && this.CostAvailable == false && this.unitAvailable == false && this.weightavailable == false
            && this.productImagecheck == false) {
            this.http.postFormData("/create_product", formdata).subscribe((response: any) => {
              this.router.navigate(['/myproducts']);
              console.log(response);
              if (response.success == "true") {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                Toast.fire({
                  icon: 'success',
                  title: 'Product Added Successfully '
                })
                setTimeout(() => {
                  location.reload();
                }, 10);
              }

            }, (error: any) => {
              console.log(error);
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Product Already Exist'
              })
            }
            );
          }
        }

      }
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Kindly Update Your Profile Details'
      })
      this.router.navigate(['/sellerdetailpage'])
    }

  }
  searchPage() {
    this.router.navigate(['/searchpage'])
  }


  store_category_id: any;
  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.store_category_id = response.records.store_category_id
        this.getCategoryList();

        if (response.records.store_category != null) {
          this.store_categoryCheck = false
        } else {
          this.store_categoryCheck = true;
        }

      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }

}