import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const cities = {
  'São Paulo': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
  'Rio de Janeiro': ['Angra dos Reis', 'Niteói', 'Itaboraí'],
  'Minas Gerais': ['Belo Horizonte', 'Monte Azul', 'Muzambinho']
}

const students = [...Array(24)].map((_, index) => {
  const fakeState = sample(['São Paulo', 'Rio de Janeiro', 'Minas Gerais']);
  return ({
    id: faker.datatype.uuid(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.fullName(),
    course: sample(['Matemática', 'Letras', 'Geografia']),
    state: fakeState,
    city: sample(cities[fakeState]),
  });
});

export default students;
