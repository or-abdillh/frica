import { defineStore } from 'pinia'

export const useBookmark = defineStore('bookmark', {
    state: () => (
        { 
            bookmarks: [
                { vacationId: 1, userId: 1 }
            ] 
        }
    )
})