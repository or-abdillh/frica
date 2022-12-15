import { defineStore } from 'pinia'
import actions from './actions.js'

export const useVacation = defineStore('vacation', {
    state: () => (
        { 
            vacations: [
                { id: 1, title: 'New Batakan Beach', location: 'Pelaihari', category: 'Beach' },
                { id: 2, title: 'Pasar Apung Muara Kuin', location: 'Banjarmasin', category: 'River' },
                { id: 3, title: 'Pulau Kembang', location: 'Barito Kuala', category: 'Island' },
                { id: 4, title: 'Taman Siring Sungai Martapura ', location: 'Martapura', category: 'Garden' },
                { id: 5, title: 'Taman Maskot', location: 'Banjarmasin', category: 'Garden' },
                { id: 6, title: 'Arung Jeram Sungai Amandit', location: 'Hulu Sungai Selatan', category: 'River' },
                { id: 7, title: 'Pantai Jodoh', location: 'Banjarmasin', category: 'Beach' },
                { id: 8, title: 'Air Terjun Bajuin', location: 'Tanah Laut,', category: 'Waterfall' },
                { id: 9, title: 'Bukit Langgara', location: 'Pelaihari', category: 'Mountain' },
                { id: 10, title: 'Pulau Gelap', location: 'Kota Baru,', category: 'Island' },
                { id: 11, title: 'Bukit Rimpi', location: 'Pelaihari', category: 'Mountain' },
                { id: 12, title: 'Masjid Sultan Suriansyah', location: 'Banjarmasin', category: 'Historical' },
            ]
        }
    ),
    actions
})