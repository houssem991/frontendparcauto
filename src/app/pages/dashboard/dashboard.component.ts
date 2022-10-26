import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {AuthService} from '../../shared/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;
  user: any;
  settings = {
    columns: {
      id: {
        title: 'Code User'
      },

      username: {
        title: 'Nom Utilisateur '
      },
      email: {
        title: 'Email '
      },
      role: {
        title: 'Rôle',
        filter: {
          type: 'list',
          config: {
            selectText: 'select .....',
            list: [
              {value: 'ROLE_ADMIN', title: 'ROLE_ADMIN'},
              {value: 'ROLE_USER', title: 'ROLE_USER'}
            ]
          }
        }
      },
    },
    attr: {
      class: 'table table-responsive '
    },
    actions: {
      columnTitle: '',
      custom: [

        {
          name: 'delete',
          title: '<a  href=""  ><i class="fa fa-trash px-1" aria-hidden="true"></i></a>'
        },
        {
          name: 'update',
          title: '<a  href=""  ><i class="fa fa-wrench px-1" aria-hidden="true"></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      show: false,

      position: 'right'
    }
  };
  settingsUser = {
    columns: {
      id: {
        title: 'Code User'
      },

      username: {
        title: 'Nom Utilisateur '
      },
      email: {
        title: 'Email '
      },
      role: {
        title: 'Rôle',
        filter: {
          type: 'list',
          config: {
            selectText: 'select .....',
            list: [
              {value: 'ROLE_ADMIN', title: 'ROLE_ADMIN'},
              {value: 'ROLE_USER', title: 'ROLE_USER'}
            ]
          }
        }
      },
    }
    ,
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [],
      add: false,
      delete: false,
      edit: false,
      show: false,

      position: 'right'
    }
  };


  constructor(private router: Router, private tokenstorage: TokenStorageService , private authService: AuthService) {
    this.getall();
  }

  getall() {
    this.authService.getall().subscribe(data => {
      console.log(data);
      this.users = [];
      data.forEach(val => {
        const ob = {
          'id': val.id,
          'username': val.username,
          'email': val.email,
          'role': val.roles[0].name,
        };
        this.users.push(ob);
      });
  },
      err => {
        window.location.reload()
      }
  );
  }
  delete($id) {
    this.authService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['updateUser', $event['data']['id'] ]);
    } else if ($event.action === 'delete') {
      if (window.confirm('voulez vous vraiment supprimer ce chauffeur?')) {
        this.delete($event['data']['id']);
        window.location.reload();

      } else {
        $event.confirm.reject();
      }
      window.location.reload();


    }

  }

  ngOnInit(): void {
    if (this.tokenstorage.getToken()) {
      this.user = this.tokenstorage.getUser();
    }
  }

}
