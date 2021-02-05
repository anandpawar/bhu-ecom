import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetail: any;
  productForm: FormGroup = new FormGroup({});
  submitted = false;
  modalRef;
  action : string = 'Add';
  editData;

  @ViewChild('content') content: ElementRef;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private userService: UserService
    ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      quantity: ['', Validators.required]
    });
  }

  show(data?){
    if(data){
		this.userService.getProduct(data.id).subscribe(res => {
			if(res['data']){
				this.productForm = this.formBuilder.group({
					name: [res['data'].product.name, [Validators.required]],
					quantity: [res['data'].product.quantity, Validators.required]
				});
				this.editData = res['data'].product;
				this.action = 'Update';
			}
		},
		error => {
			this.submitted = false;
			let message = error.error.errorMessage
			Swal.fire(message, '', 'error')
		});
    }
    this.modalRef = this.modalService.open(this.content, {
      ariaLabelledBy: 'modal-basic-title'
    });
  }

  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
        return;
	}
	if(this.action == 'Update' && this.editData){
		this.productForm.value['id'] = this.editData.id;
		this.userService.updateProduct(this.productForm.value).subscribe(data => {
			this.submitted = false;
			Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product updated successfully!',
                showConfirmButton: false,
                timer: 3000
			});
			this.modalRef.close();
		},
		error => {
			this.submitted = false;
			let message = error.error.errorMessage
			Swal.fire(message, '', 'error')
		}
		);
	}else{
		this.userService.createProduct(this.productForm.value).subscribe(data => {
			this.submitted = false;
			Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product created successfully!',
                showConfirmButton: false,
                timer: 3000
			});
			this.modalRef.close();
		},
		error => {
			this.submitted = false;
			let message = error.error.errorMessage
			Swal.fire(message, '', 'error')
		}
		);
	}
    
  }

  close(){
	this.productForm.reset()
	  this.modalRef.close();
  }
}
