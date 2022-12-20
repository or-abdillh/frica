'use strict'

import Slug from "@/helpers/Slug.js"

const actions = {
    getDetail(slug) {
        return this.channels
            .filter(
                channel => Slug.generate( channel.title ) === slug
            )[0]
    }
}

export default actions