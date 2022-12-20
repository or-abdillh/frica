import { defineStore } from 'pinia'
import actions from '@store/channel/actions.js'

export const useChannel = defineStore('channel', {
    state: () => (
        { 
            channels: [
                { id: 1, title: 'Bakula Adventure', isActive: true, trips: 12, members: 23 },
                { id: 2, title: 'Tim Foya Foya', isActive: true, trips: 9, members: 17 },
                { id: 3, title: 'Mejeng Club Community', isActive: true, trips: 4, members: 10 },
                { id: 4, title: 'Bejalanan Riya Riya', isActive: true, trips: 22, members: 45 },
                { id: 5, title: 'Tim Bejalanan Random', isActive: true, trips: 34, members: 88 },
                { id: 6, title: 'Keliling Banjarmasin', isActive: true, trips: 16, members: 40 },
            ]
        }
    ),
    actions
})