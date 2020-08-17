export const fetchGameQuery = `
query getGame($id: Int!) {
  game(game_id: $id) {
    id
    name
    description_raw
    released
    tba
    background_image
    website
    rating
    rating_top
    ratings {
      id
      title
      count
      percent
    }
    genres {
      id
      name
    }
    tags {
      id
      name
    }
    developers {
      id
      name
    }
    stores {
      id
      url
      store {
        store_id
        name
      }
    }
    platforms {
      platform {
        id
        name
      }
      released_at
      requirements {
        minimum
        recommended
      }
    }
  }
}
`;

export const fetchPopularQuery = `{
  games {
    id
    name
    released
    background_image
  }
}
`;

export const fetchSimilarQuery = `
query getSimilar($id: Int!){
  similar(gameId:$id) {
    id
    name
    released
    background_image
  }
}
`;

export const fetchSearchQuery = `
query getGames($search: String!, $page: Int!){
  search(searchQ:$search, page:$page) {
    count
    next
    previous
    results {
      id
      name
      released
      background_image
    }
  }
}
`;

export const fetchAllQuery = `{
  games {
    id
    name
    released
    tba
    background_image
    website
    ratings {
      id
      title
      count
      percent
    }
    genres {
      id
      name
    }
    tags {
      id
      name
      language
    }
    developpers {
      id
      name
    }
    stores {
      id
      store_details {
        store_id
        name
      }
    }
    platforms {
      platform {
        id
        name
      }
      released_at
      requirements {
        minimum
        recomended
      }
    }
  }
}
`;
