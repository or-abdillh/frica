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

    getSlug(id) {
        return this.vacations
            .filter( vacation => vacation.id === id )[0].title.toLowerCase().split(' ').join('-')
    }
}

export default actions