'use strict'

const Slug = {

    generate(string = 'example string') {
        return string.toLowerCase().split(' ').join('-')
    },

    extract(slug) {
        return slug.split('-')
            .map( words => {
                let wordSplit = words.split('')
                wordSplit[0] = wordSplit[0].toUpperCase()
                return wordSplit.join('')
            })
            .join(' ')
    }
}

export default Slug