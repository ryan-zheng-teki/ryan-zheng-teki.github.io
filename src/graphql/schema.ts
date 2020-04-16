import gql from "graphql-tag"

export const GET_SELECTED_CATEGORY = gql`
    query selectedCategory {
        currentSelectedCategory
    }
`