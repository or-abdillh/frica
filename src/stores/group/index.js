import { defineStore } from 'pinia'

export const useGroup = defineStore('group', {
    state: () => (
        { 
            groups: [
                { id: 1, name: 'Bonding' }
            ]
        }
    )
})