import { defineStore } from 'pinia'

export const useVacation = defineStore('vacation', {
    state: () => (
        { 
            vacations: [
                { title: 'Pantai Batakan' }
            ]
        }
    )
})