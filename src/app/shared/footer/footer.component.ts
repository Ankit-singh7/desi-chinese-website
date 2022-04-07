import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public branchDetails:any;

  constructor(private commonService: CommonService) {
    this.get_branch_detail()
   }

  ngOnInit(): void {
    this.get_branch_detail()
  }


  get_branch_detail(){
    this.commonService.getBranchList().subscribe((res) => {
      this.branchDetails = res.data[0]
      console.log(res)
    })
  }

}
