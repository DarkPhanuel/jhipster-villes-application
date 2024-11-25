import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23126,
  login: 'vOdI',
};

export const sampleWithPartialData: IUser = {
  id: 8348,
  login: 'SV5@YOu9A\\7yDJr\\$jQ5xx\\emjDS4S\\Wg',
};

export const sampleWithFullData: IUser = {
  id: 8809,
  login: 'OSo0l',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
