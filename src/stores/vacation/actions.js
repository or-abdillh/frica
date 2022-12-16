const actions = {
    all() {
        return this.vacations 
    },

    filter(keyword = '', category = 'All') {
        let results = this.vacations
            .filter( 
                vacation => vacation.title.toLowerCase().includes(keyword.toLowerCase()) 
            )
        if ( category !== 'All' ) results = results.filter( result => result.category === category )
        return results
    },

    generateSlug(string = 'Vacation Title') {
        return string.toLowerCase().split(' ').join('-')
    },

    getSlug(id) {
        return this.generateSlug(
            this.vacations.filter( vacation => vacation.id === id )[0].title
        )
    },

    extractSlug(slug) {
        return slug.split('-')
            .map( words => {
                let wordSplit = words.split('')
                wordSplit[0] = wordSplit[0].toUpperCase()
                return wordSplit.join('')
            })
            .join(' ')
    }
}

export default actions