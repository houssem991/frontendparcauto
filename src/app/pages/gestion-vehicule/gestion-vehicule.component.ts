import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';

@Component({
  selector: 'app-gestion-vehicule',
  templateUrl: './gestion-vehicule.component.html',
  styleUrls: ['./gestion-vehicule.component.scss']
})
export class GestionVehiculeComponent implements OnInit {

  vehicule: any;
  settings = {
    columns: {
      immat: {
        title: 'immat'
      },
      nameassurance: {
        title: 'Assurance'
      },
      echeance: {
        title: 'Echeance Assurance'
      },
      vignette: {
        title: 'Vignette'
      },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'delete',
          title: '<a  href=""  ><i class="fa fa-trash px-1" aria-hidden="true"></i></a>'
        },
        {
          name: 'show',
          title: '<a  href="" ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
        },
        {
          name: 'update',
          title: '<a  href=""  ><i class="fa fa-wrench px-1" aria-hidden="true"></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      position: 'right'
    }
  };
  settingsUser = {
    columns: {
        immat: {
          title: 'immat'
        },
        nameassurance: {
          title: 'Assurance'
        },
        echeance: {
          title: 'Echeance Assurance'
        },
        vignette: {
          title: 'Vignette'
        },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'show',
          title: '<a  href="" ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      position: 'right'
    }
  };
  user: any;


  constructor(private router: Router, private tokenStorage: TokenStorageService, private vehiculeService: VehiculeService) {
    this.getall();
  }

  getall() {
    this.vehiculeService.getall().subscribe(data => {
      console.log(data);
      this.vehicule = data;
    });

  }

  delete($id) {
    this.vehiculeService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['update-vehicule', $event['data']['id'] ]);
    } else if ($event.action === 'show') {
      this.router.navigate(['show-vehicule', $event['data']['id']]);
    } else if ($event.action === 'delete') {
      if (window.confirm('Voulez vous vraiment supprimer cette question?')) {
        this.delete($event['data']['id']);
        window.location.reload();

      } else {
        $event.confirm.reject();
      }
    } else {
      this.router.navigate(['gestion-vehicule']);

    }

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }


}
