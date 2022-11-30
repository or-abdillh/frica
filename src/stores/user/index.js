import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => (
        { 
            name: 'Jonathan Doe', 
            username: 'john_doe23' 
        }
    )
})