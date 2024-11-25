import dayjs from 'dayjs/esm';

import { IJoueur, NewJoueur } from './joueur.model';

export const sampleWithRequiredData: IJoueur = {
  id: 15039,
};

export const sampleWithPartialData: IJoueur = {
  id: 24967,
  pseudo: 'versus with spirit',
  motDePasse: 'inconsequential papa or',
  dateInscription: dayjs('2024-11-25T04:36'),
};

export const sampleWithFullData: IJoueur = {
  id: 29915,
  pseudo: 'drat',
  motDePasse: 'nicely how',
  dateInscription: dayjs('2024-11-24T22:30'),
  estAdministrateur: false,
};

export const sampleWithNewData: NewJoueur = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
