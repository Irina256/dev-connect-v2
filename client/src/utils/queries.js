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
  query getProducts($category_id: Int) {
    products(category_id: $category_id) {
      id
      product_name
      price
      quantity
      imgPath
      category_id
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      id
      product_name
      price
      quantity
      imgPath
      category {
        category_name
      }
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
  }
`;
