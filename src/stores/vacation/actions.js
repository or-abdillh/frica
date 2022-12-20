import Slug from '@/helpers/Slug.js'

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
        return Slug.generate(
            this.vacations.filter( vacation => vacation.id === id )[0].title
        )
    },
}

export default actions