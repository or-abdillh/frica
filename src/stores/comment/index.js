import { defineStore } from 'pinia'

export const useComment = defineStore('comment', {
    state: () => (
        { 
            comments: [
                { groupId: 1, userId: 1, content: 'Hi all' }
            ]
        }
    )
})