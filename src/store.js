import { proxy } from 'valtio'

export const state = proxy({
  intro: true,
  colors: [
    '#ccc',
    '#EFBD4E',
    '#80C670',
    '#726DE8',
    '#EF674E',
    '#353934',
    'Purple'
  ],
  decals: ['react', 'three2', 'pmndrs'],
  selectedColor: '#EFBD4E',
  selectedDecal: 'three2'
})
