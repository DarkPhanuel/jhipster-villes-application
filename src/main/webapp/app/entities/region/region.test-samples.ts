import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 26894,
};

export const sampleWithPartialData: IRegion = {
  id: 22663,
};

export const sampleWithFullData: IRegion = {
  id: 28721,
  nom: 'whether loyally gosh',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
