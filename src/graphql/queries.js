/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      image
      pet {
        items {
          id
          name
          ownerID
          birthdate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        image
        pet {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      name
      ownerID
      birthdate
      createdAt
      updatedAt
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ownerID
        birthdate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
      id
      taskName
      createdAt
      updatedAt
    }
  }
`;
export const listTaskss = /* GraphQL */ `
  query ListTaskss(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
