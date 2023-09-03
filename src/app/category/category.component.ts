import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  listChildChanged = [];
  arr = [
    {
      id: "group_1",
      name: "Group 1",
      items: [
        {
          id: "group_1.abc",
          name: "ABC",
          checked: false,
          expand: true,
          childs: [
            {
              id: "group_1.abc.action_See_List",
              name: "See List",
              checked: false
            },
            {
              id: "group_1.abc.action_Edit",
              name: "Edit",
              checked: false
            },
            {
              id: "group_1.abc.action_Delete",
              name: "Delete",
              checked: false
            },
            {
              id: "group_1.abc.action_Print",
              name: "Print",
              checked: false
            }
          ]
        },
        {
          id: "group_1.def",
          name: "DEF",
          checked: false,
          expand: true,
          childs: [
            {
              id: "group_1.def.action_See_List",
              name: "See List",
              checked: false
            },
            {
              id: "group_1.def.action_Edit",
              name: "Edit",
              checked: false
            },
            {
              id: "group_1.def.action_Delete",
              name: "Delete",
              checked: false
            },
            {
              id: "group_1.def.action_Print",
              name: "Print",
              checked: false
            }
          ]
        }
      ]
    },
    
  ];

  checkMinusSquare(item : any) {
    const count = item.childs.filter((x: { checked: boolean; }) => x.checked == true).length;
    if (count > 0 && count < item.childs.length) {
      return true;
    } else if (count == 0) {
      return false;
    }
    return false;
  }

  checkParent(group_i: any, i:  any) {
 /*  this.arr[group_i].items[i].checked = !this.arr[group_i].items[i].checked;
    if (this.arr[group_i].items[i].checked) {
      this.arr[group_i].items[i].childs.map(x => (x.checked = true));
    } else {
      this.arr[group_i].items[i].childs.map(x => (x.checked = false));
    }
    this.arr[group_i].items[i].childs.forEach(x => {
      if (this.listChildChanged.findIndex(el => el.id == x.id) == -1) {
        this.listChildChanged.push(x);
      }
    });*/
  }

  checkChild(group_i: string | number, parent_i: string | number, i: string | number) {
  /*  this.arr[group_i].items[parent_i].childs[i].checked = !this.arr[group_i]
      .items[parent_i].childs[i].checked;
    const count = this.arr[group_i].items[parent_i].childs.filter(
      el => el.checked == true
    ).length;
    if (count == this.arr[group_i].items[parent_i].childs.length) {
      this.arr[group_i].items[parent_i].checked = true;
    } else {
      this.arr[group_i].items[parent_i].checked = false;
    }
    if (this.listChildChanged.findIndex(el => el.id == this.arr[group_i].items[parent_i].childs[i].id) == -1) {
      this.listChildChanged.push(this.arr[group_i].items[parent_i].childs[i]);
    }*/
  }

  getListChildChanged() {
    console.log(this.listChildChanged);
  }
  constructor() { }

  ngOnInit() {
  }

}