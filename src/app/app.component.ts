import { Component, OnInit } from '@angular/core';
import { APIConstant } from './shared/constant';
import { GeneralService } from './service/general.service';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'github-repo';
  repoList: Array<any> = [];
  /**Defining constructor  */
  constructor(private generalService: GeneralService) { }
  /* Defining lifecycle hooks for calling onload functions*/
  ngOnInit() {
    /* declairing the fetchgithubrepo based on search params*/
    this.fetchGithubRepoBasedOnSearch();
  }
  /* defining function fetchGithubRepoBasedOnSearch
   * @purpose: fetch github repo name based on search param
   * @author: saurabh
  */
  private fetchGithubRepoBasedOnSearch() {
    try {
      this.generalService.get(APIConstant.url).subscribe((resp: any) => {
        if (resp.items.length > 0) {
          /* assigning repo data to repoList */
          this.repoList = resp.items;
        }
      },
        error => {
          console.log(error)
        }
      )
    } catch {
      /* internal developer check*/
      console.log('Bad Bad server');
    }
  }
  /* defining function for opening modal with selected data
  *  @params: data object
  *  @author: saurabh
  */
   public openModal(data:object){
     console.log(data);
     document.getElementById('showModal').click();
    //  this.modalService.open(data, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   console.log(result);
    // }, (reason) => {
    //   console.log(reason);
    // });
   }
}
