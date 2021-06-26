/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      image
      pets {
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
      tasks {
        items {
          id
          taskName
          iconName
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
      pets {
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
      tasks {
        items {
          id
          taskName
          iconName
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
      pets {
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
      tasks {
        items {
          id
          taskName
          iconName
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      taskName
      iconName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      taskName
      iconName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      taskName
      iconName
      createdAt
      updatedAt
    }
  }
`;
