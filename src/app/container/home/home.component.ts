import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name: any;
  public email: any;
  public subject: any;
  public message: any;
  public breakfastList = [];
  public lunchList = [];
  public dinnerList = [];

  constructor(private commonService: CommonService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getFoodList();

  }

  getFoodList(){
    this.commonService.getFoodList().subscribe((res) => {
      if(res.data) {
        this.lunchList = res.data.filter((item) => item.food_type === 'Lunch')
        this.breakfastList = res.data.filter((item) => item.food_type === 'Breakfast')
        this.dinnerList = res.data.filter((item) => item.food_type === 'Dinner')
      }
    })
  }

  sendMail(){

      let obj = {
        name:this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }

      console.log(obj)

      this.commonService.sendEmail(obj).subscribe((res) => {
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.toaster.success('Our Team will connect to you shortly!','Thank You');
      })
    

  }

}
