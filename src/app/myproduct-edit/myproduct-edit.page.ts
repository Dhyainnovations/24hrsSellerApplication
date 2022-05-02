import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-myproduct-edit',
  templateUrl: './myproduct-edit.page.html',
  styleUrls: ['./myproduct-edit.page.scss'],
})
export class MyproductEditPage implements OnInit {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

    route.params.subscribe(val => {
      this.sellerAllDetails();
      //this.getSubcategoryList();
      // this.getUnit();
      this.LoadReadData();
      this.appendReadData();
      console.log(this.subcategory);
      this.imageSize = false;
      this.logoUploadCheck = false;
      this.isVisibleButtons = true;
    })


  }


  LoadReadData() {
    this.route.queryParams.subscribe(params => {
      //console.log(params.product_name);
      this.product_name = params.product_name;
      this.tbid_value = params.tbid;
    }
    );
  }


  ngOnInit() {
  }

  userdetails: any = localStorage.getItem("tbid");
  subCategoryNotfound: any = false;
  category_tbid: any;
  subcategory_tbid: any;
  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  popupModel(data) {
    const formdata = new FormData();
    formdata.append("category", data.category);
    this.category_tbid = data.category;
    this.Category = data.category;
    console.log(data.category);
    const c = data.category;
    this.subcategory = "";
    this.http.get('/read_one_category?c=' + c).subscribe((response: any) => {
      this.category_tbid = response.records.tbid;
      console.log(response.records.tbid);
      this.subcategory = "";
      this.PopupModel = false;
      this.productname = "";
      this.cost = "";
      this.weight = "";
      this.Selectedunit = "";
      this.description = "";
    }, (error: any) => {
      console.log(error);
    }
    );
  }




  Category_value: any = 1;
  appendReadData() {
    const p = this.product_name;
    //console.log(p);
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      this.description = response.records.description;
      this.Category = response.records.category;
      this.subcategory = response.records.subcategory;
      this.productname = response.records.product_name;
      this.cost = response.records.cost;
      this.DisplayImage = response.records.product_image;
      this.tbid = response.records.tbid;
      this.weight = response.records.weight;
      this.Selectedunit = response.records.unit;
      this.category_tbid = response.records.category_id;
      this.subcategory_tbid = response.records.subcategory_id;
      console.log(response.records);
      this.defaultSubCategoryList();
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  Selectedunit: any = "";
  product_name: any = "";
  tbid: any = "";
  DisplayImage: any = "";
  tbid_value: any = "";
  displayreaddata = [];
  // readunit: [];
  showProducts = [];
  public date: string = new Date().toISOString();
  Category: any = '';
  subcategory: any = '';
  productname: any = '';
  description: any = '';
  cost: any = '';
  showimage = '';
  showImageDisplay = false;
  categoryName: any = '';
  subcategoryName: any = '';
  categoryList: any = [];
  subcategoryList: any = [];
  PopupModel: any = false;
  subcategoryPopupModel: any = false;
  readunitvalue: any = "";
  weight: any;
  unitSelected: any;
  unit: any = [

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
    "lb (Pounds)"

  ]
  MakeTrue: any;
  showselecteditems() {
    this.MakeTrue = true;
  }

  imageSize: any;
  productImagecheck: any;
  MediaFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    var imageSize = event.target.files[0].size;
    if (imageSize > 5242880) {
      this.imageSize = true;
      this.logoUploadCheck = false;
    } else {
      this.imageSize = false;
      this.logoUploadCheck = true;
      this.productImagecheck = false;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.DisplayImage = reader.result;
      }
    }
    console.log(this.selectedFile);
    const files = event.target.files;


  }
  selectedFile: File = null;
  image: any;
  buttonType: any;
  uploadImageFile: any;

  onClickSubmit(data) {
    if (this.MakeTrue == true) {
      var buttonName = document.getElementById("submit");
      console.log(buttonName);

      var Splittedunit = this.Selectedunit.split(" ", 1);
      this.image = this.selectedFile;
      if (this.image == null) {
        this.uploadImageFile = false;
        var ImageName = this.DisplayImage.replace('https://dhya.in/24Hrs/images/seller/product/', '');
        this.image = ImageName

      }



      // console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));

      // var body = "category = " + data.category + "subcategory = " + data.subcategory + "product_name = " + data.product_name + "cost = " + data.cost + "unit = " + data.unit + "product_image = " + this.image + "description = " + data.description;
      // console.log(body);

      if (this.uploadImageFile != false) {
        const formdata = new FormData();
        formdata.append("tbid", this.tbid_value)
        formdata.append("category_id", this.category_tbid);
        formdata.append("subcategory_id", this.subcategory_tbid);
        formdata.append("product_name", data.product_name);
        formdata.append("cost", data.cost);
        formdata.append("unit", Splittedunit);
        formdata.append("description", data.description);
        formdata.append("product_image", this.image);
        formdata.append("weight", data.weight)
        this.http.postFormData("/update_product", formdata).subscribe((response: any) => {
          console.log(response);
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
            title: 'Updated successfully'
          })
          this.router.navigate(['/myproducts']);

        }, (error: any) => {

          if (error.error.message == "Please select a image file to upload. Data is incomplete.") {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: 'Kindly Upload Image Once Again To Update Product'
            })
          }
          if (error.error.message == "Unable to Update Product. Data is incomplete.") {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: 'Kindly Fill All The Details'
            })
          }
        }
        );
      } else {
        const formdata = new FormData();
        formdata.append("tbid", this.tbid_value)
        formdata.append("category_id", this.category_tbid);
        formdata.append("subcategory_id", this.subcategory_tbid);
        formdata.append("product_name", data.product_name);
        formdata.append("cost", data.cost);
        formdata.append("unit", Splittedunit);
        formdata.append("description", data.description);
        formdata.append("product_image_url", this.image);
        formdata.append("weight", data.weight)
        this.http.postFormData("/products_gallery", formdata).subscribe((response: any) => {
          console.log(response);
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
            title: 'Updated successfully'
          })
          this.router.navigate(['/myproducts']);

        }, (error: any) => {

          if (error.error.message == "Please select a image file to upload. Data is incomplete.") {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: 'Kindly Upload Image Once Again To Update Product'
            })
          }
          if (error.error.message == "Unable to Update Product. Data is incomplete.") {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: 'Kindly Fill All The Details'
            })
          }
        }
        );
      }
    }
  }


  backToprivious() {
    this.PopupModel = false;


  }

  offertbid_value: any;
  deleteProduct() {
    const obj = {
      tbid: this.tbid_value
    }
    console.log(obj);

    this.http.postFormData('/delete_product', obj).subscribe((response: any) => {
      //console.log(response);
      if (response.success == "true") {
        const o = this.productname;
        console.log(o);
        this.http.get('/read_one_offer?o=' + o).subscribe((response: any) => {
          var OfferTbidValue = response.records.tbid
          const obj = {
            tbid: OfferTbidValue
          }
          this.http.postFormData('/delete_offer', obj).subscribe((response: any) => {
            console.log(response);
          }, (error: any) => {
            console.log(error);
          }
          )
        }, (error: any) => {
          console.log(error);
        }
        );
        this.http.postFormData('/delete_offer', obj).subscribe((response: any) => {
          console.log(response);
        }, (error: any) => {
          console.log(error);
        }
        )
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
          title: 'Deleted successfully'
        })
        this.router.navigate(['/myproducts'])
      }


    }, (error: any) => {
      //console.log(error);
    }
    );

  }


  NavigatetoNotification() {
    this.router.navigate(['/notification'])
  }


  ScBackToprivious() {
    this.subcategoryPopupModel = false;


  }

  addproduct() {

    this.router.navigate(['/myproducts'])
  }
  createCategory() {
    const catData = {
      category_name: this.categoryName,
    }
    this.http.postFormData('/create_category', catData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.Category = ''
        this.categoryName = ''
        this.getCategoryList();
        this.subcategory = "";
        this.PopupModel = false;
        this.productname = "";
        this.cost = "";
        this.weight = "";
        this.Selectedunit = "";
        this.description = "";
      }
    }, (error: any) => {
      console.log(error);

    }
    );

  }





  getCategoryList() {
    var obj = {
      store_category_id: this.store_category_id
    }
    this.http.post('/list_category', obj).subscribe((response: any) => {
      this.categoryList = response.records
      console.log(response.records);
    }, (error: any) => {
      console.log(error);

    }
    );
  }


  backToMyproducts() {
    this.router.navigate(['/myproducts'])
  }

  isvisible: any = false;
  isVisibleButtons: any = true;
  hidepopup() {
    this.isvisible = false;
  }


  addnewcategorypopup: any = false;
  addnewsubcategorypopup: any = false;

  hideaddnewcategorypopup() {
    this.isVisibleButtons = true;
    this.addnewcategorypopup = false;

  }
  showaddnewcategorypopup() {
    this.isVisibleButtons = false;
    this.addnewcategorypopup = true;

  }

  showaddnewsubcategorypopup() {
    this.isVisibleButtons = false;
    this.addnewsubcategorypopup = true;
  }

  hideaddnewsubcategorypopup() {
    this.isVisibleButtons = true;
    this.addnewsubcategorypopup = false;
  }

  defaultSubCategoryList() {
    const obj = {
      category_id: this.category_tbid,
      store_category_id: this.store_category_id
    }
    console.log(obj);

    this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {
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


  categorysubmit() {
    const obj = {
      category_id: this.category_tbid,
      store_category_id: this.store_category_id
    }
    console.log(obj);

    this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {

      if (response.success == "true") {
        this.isVisibleButtons = true;
      }
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
    this.addnewcategorypopup = false;
    this.isVisibleButtons = true;
  }
  subcategorysubmit(value) {
    console.log(value.subcategory);
    this.subcategory = value.subcategory;
    const s = value.subcategory;
    this.http.get('/read_one_subcategory?s=' + s).subscribe((response: any) => {
      if (response.success == "true") {
        this.isVisibleButtons = true;
      }
      this.subcategory_tbid = response.records.tbid;
    }, (error: any) => {
      console.log(error);
    }
    );
    this.addnewsubcategorypopup = false;
  }


  visibleCategoryPopup() {
    this.PopupModel = true;
  }

  visibleSubCategoryPopup() {
    this.subcategoryPopupModel = true;
  }
  logoUploadCheck: any;
  createSubcategory() {
    const subcatData = {
      category_id: this.category_tbid,
      subcategory_name: this.subcategoryName
    }

    this.http.postFormData('/create_subcategory', subcatData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        console.log("test");
        this.subcategoryName = ''
        this.subcategoryPopupModel = false;
        const obj = {
          category_id: this.category_tbid,
          store_category_id: this.store_category_id
        }
        console.log(obj);

        this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {
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
    }, (error: any) => {
      console.log(error);
    }
    );

  }

  onSubmit(buttonType): void {
    if (buttonType === "Next") {
      console.log(buttonType)
    }
    if (buttonType === "Previous") {
      console.log(buttonType)
    }

  }
  productPage: any = true;
  selectUnitpopup: any;
  Changeunit() {
    this.isVisibleButtons = false;
    this.selectUnitpopup = true;

  }

  hideChangeunit() {
    this.isVisibleButtons = true;
    this.selectUnitpopup = false;

  }

  unitList: any = ["box (Box)",
    "cm (Centimeter)",
    "dz (Dozen)",
    "ft (Feet)",
    "  g (Grams)",
    "in (Inches)",
    " kg (Kilograms)",
    "km (Kilometres)",
    "lb (Pounds)",
    "mg (Milli Grams)",
    "ml (Milli Litre)",
    " m (Meter)",
    "pc (Piece)",
    'bag ',
    "ltr"]


  unitSelect() {
    this.Selectedunit = this.unitSelected;
    console.log(this.unitSelected);

  }

  updateChangeunit() {
    this.isVisibleButtons = true;
    this.selectUnitpopup = false;
  }

  store_category_id: any;
  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.store_category_id = response.records.store_category_id;
        this.getCategoryList()
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }





}