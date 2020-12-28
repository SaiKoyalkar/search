import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items:Array<Object> = [{name:'', timestamp:''}]
  searchText:string;
  toggle: boolean = true;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((resp:Array<Object>)=>{
      this.items = resp;
    })
  }

  sortByTime(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.items.sort((a:any, b:any)=>{
        return a.timestamp < b.timestamp ? -1 : 1;
      });
    } else {
      this.items.sort((a:any, b:any)=>{
        return b.timestamp < a.timestamp ? -1 : 1;
      });
      }
  }
}
