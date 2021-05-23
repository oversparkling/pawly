/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet {
    onCreatePet {
      id
      name
      ownerID
      birthdate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet {
    onUpdatePet {
      id
      name
      ownerID
      birthdate
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet {
    onDeletePet {
      id
      name
      ownerID
      birthdate
      createdAt
      updatedAt
    }
  }
`;
