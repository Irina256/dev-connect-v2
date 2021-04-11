import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                id
                username
            }
        }
    }
`

export const SIGNUP_USER = gql`
    mutation addUser ($username: String!, $email: String!, $first_name: String!, $last_name: String!, $password: String!) {
        addUser(username: $username, email: $email, first_name: $first_name, last_name: $last_name, password: $password) {
            token
            user {
                id
                username
            }
        }
    }
`

export const ADD_USER_GROUP = gql`
    mutation addUserGroup($group_id: Int!) {
        addUserGroup(group_id: $group_id) {
            id
            group_title
        }
    }
`

export const ADD_USER_EVENT = gql`
    mutation addUserEvent($event_id: Int!) {
        addUserEvent(event_id: $event_id) {
            id
            event_title
        }
    }
`

export const CREATE_GROUP = gql`
    mutation createGroup($group_title: String!, $group_url: String!, $group_text: String!, $group_zip: Int!) {
        createGroup(group_title: $group_title, group_url: $group_url, group_text: $group_text, group_zip: $group_zip) {
            id
            group_title
  }
}
`

export const DELETE_EVENT = gql`
    mutation deleteEvent($event_id: Int!) {
        deleteEvent(event_id: $event_id) {
            id
        }
    }
`

export const EDIT_EVENT = gql`
    mutation updateEvent($event_id: Int!, $event_title: String, $event_text: String, $event_location: String, $event_time: String) {
        updateEvent(event_id: $event_id, event_title: $event_title, event_text: $event_text, event_location: $event_location, event_time: $event_time) {
            id
        }
    }
`

export const ADD_EVENT = gql`
    mutation createEvent($input: EventInput) {
        createEvent(input: $input) {
            id
            event_title
            event_text
            event_location
            event_time
            group_id
        }
    }

`

// Question and Answer Mutations

export const ADD_QUESTION = gql`
    mutation addQuestion($question_id: Int!, $question_text: String!, $username: String!) {
        addQuestion(question_id: $question_id, username: $username, question_text: $question_text) {
            id
            username
            question_text
    }
}
`

export const UPDATE_QUESTION = gql`
    mutation updateQuestion($question_id: Int!, $question_text: String!, $username: String!) {
        updateQuestion(question_id: $question_id, username: $username, question_text: $question_text) {
            id
            username
            question_text
    }
}
`

export const DELETE_QUESTION = gql`
    mutation deleteQuestion($question_id: Int!) {
        updateQuestion(question_id: $question_id) {
            id
    }
}
`

// Friend Mutations

export const ADD_FRIEND = gql`
    mutation addFriend($friend_id: Int!) {
        addFriend(friend_id: $friend_id) {
            id
    }
}
`

//Post Mutations

export const CREATE_POST =gql`
    mutation createPost($post_content: String!){
        createPost(post_content: $post_content){
            id
            post_content
        }
    }
`
export const UPDATE_POST = gql`
    mutation updatePost($post_content:String!, $post_id: Int){
        updatePost((post_content:$post_content, post_id: $post_id){
            id
            post_content
        }

    }
`
export const DELETE_POST = gql`
    mutation deletePost($post_id: Int)
        deletePost(post_id:$post_id){
            id
            post_content

        }
        
`
//Comment Mutations

export const CREATE_COMMENT = gql`
    mutation createComment($comment_text:String!, $post_id:Int){
        createComment(comment_text:$createComment, post_id:$post_id){
            id
            comment_text
            post_id
        }
    }
`
export const DELETE_COMMENT = gql`
    mutation deleteComment($comment_id:Int){
        deleteComment(comment_id:$comment_id){
            id
        }
    }
`
//Like Mutations
export const ADD_LIKE = gql`
    mutation addLike($user_id: Int, $post_id){
        addLike(user_id:$user_id, post_id:$post_id){
            user_id
            post_id

        }
    }
`
export const REMOVE_LIKE = gql`
    mutation removeLike($user_id: Int, $post_id){
        removeLike(user_id:$user_id, post_id:$post_id){
            user_id
            post_id

        }
    }
`