import gql from "graphql-tag";

export const GROUPS_BY_ZIP = gql`
  query groupByZip($group_zip: Int!, $miles: Int!) {
    groupByZip(group_zip: $group_zip, miles: $miles) {
      id
      group_title
      group_url
      group_text
      group_zip
      users_count
    }
  }
`;

export const GET_GROUP = gql`
<<<<<<< HEAD
  query group($group_url: String!) {
    group(group_url: $group_url) {
      id
      group_title
      group_text
      group_zip
      users_count
      events {
        id
        event_title
        event_text
        event_location
        event_time
      }
      group_user {
        id
        first_name
      }
=======
    query group($group_url: String!) {
        group(group_url: $group_url) {
            id
            group_title
            group_text
            group_zip
            users_count
            events {
                id
                event_title
                event_text
                event_location
                event_time
                event_user {
                    id
                    username
                }
            }
            group_user {
                id
                first_name
            }
        }
>>>>>>> 57bcfd4a8d889a48e0915797b42bbf7e4d7c1db3
    }
  }
`;

export const GET_ME_EVENTS = gql`
  query {
    me {
      id
      event_user {
        id
        event_title
      }
    }
  }
`;

export const OWNER_GROUPS = gql`
  query {
    myGroups {
      id
      group_title
      group_url
    }
  }
`;

export const GET_ME_GROUPS = gql`
  query {
    me {
      id
      group_user {
        id
        group_title
        group_url
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query {
    allProducts {
      id
      price
      product_name
      imgPath
      quantity
      category {
        id
        category_name
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query {
    categories {
      id
      category_name
    }
  }
`;
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        id
        purchase_date
        products {
          id
          product_name
          price
          quantity
          imgPath
        }
      }
    }
<<<<<<< HEAD
  }
`;
=======
`

// question and answer queries
export const GET_QUESTIONS = gql`
    query questions($username: String) {
        questions {
            id
            question_text
            username
            createdAt
            answers {
                id
                answer_text
                username
                createdAt
            }
        }
    }
    
`

export const GET_ME_QUESTIONS = gql`
    query {
        me {
            id
            questions {
                id
                question_text
                username
                createdAt
                answers {
                    id
                    answer_text
                    username
                    createdAt
                }
            }
        }
    }
`

// friend queries
export const GET_ME_FRIENDS = gql`
    query {
        me {
            id
            username
            friends {
                id
                username
            }
        }
    }
`
>>>>>>> 57bcfd4a8d889a48e0915797b42bbf7e4d7c1db3
