import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ab2beb47-8b21-4259-bbec-2c06f08c9a81',
};

export const sampleWithPartialData: IAuthority = {
  name: 'df13460c-6fe2-494c-94ca-2f4c5bac1528',
};

export const sampleWithFullData: IAuthority = {
  name: '7b6319d5-6baa-4737-af1a-ca1b4c12c858',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
