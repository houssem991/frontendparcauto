import { Component, OnInit } from '@angular/core';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gestion-chauffeur',
  templateUrl: './gestion-chauffeur.component.html',
  styleUrls: ['./gestion-chauffeur.component.scss']
})
export class GestionChauffeurComponent implements OnInit {

  chauffeurs: any;
  user: any;
  settings = {
    columns: {
      id: {
        title: 'Code chauffeurs'
      },

      firstname: {
        title: 'Nom chauffeurs '
      },
      lastname: {
        title: 'Prenom chauffeurs '
      },
      cin: {
        title: 'Num CIN '
      },
      datenaissance: {
        title: 'Date de Naissance'
      },
      immatv: {
        title: 'Vehicule'
      }

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
          name: 'show',
          title: '<a  href=""   ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
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
        title: 'Code chauffeurs'
      },

      firstname: {
        title: 'Nom chauffeurs '
      },
      cin: {
        title: 'Num CIN '
      },
      datenaissance: {
        title: 'Date de Naissance'
      }
      }
    ,
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'show',
          title: '<a  href=""   ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      show: false,

      position: 'right'
    }
  };


  constructor(private router: Router, private tokenstorage: TokenStorageService , private gestionchauffeursService: ChauffeurService) {
    this.getall();
  }

  getall() {
    this.gestionchauffeursService.getall().subscribe(data => {
      console.log(data);
      this.chauffeurs = data;
    });

  }

  delete($id) {
    this.gestionchauffeursService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['updatechauffeur', $event['data']['id'] ]);
    }  else if ($event.action === 'show') {
      this.router.navigate(['showchauffeur', $event['data']['id']]);
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
