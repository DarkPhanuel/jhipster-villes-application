import { IVille, NewVille } from './ville.model';

export const sampleWithRequiredData: IVille = {
  id: 15163,
};

export const sampleWithPartialData: IVille = {
  id: 16311,
  nom: 'disappointment ideal',
};

export const sampleWithFullData: IVille = {
  id: 2924,
  nom: 'whoever oof meanwhile',
  codePostal: 'qua',
  nbHabitants: 18443,
};

export const sampleWithNewData: NewVille = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
