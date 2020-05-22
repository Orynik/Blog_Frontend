package store_test

import (
	"testing"

	"github.com/Kentabr5427/http-rest-api/internal/app/model"
	"github.com/Kentabr5427/http-rest-api/internal/app/store"
	"github.com/stretchr/testify/assert"
)

func TestUserRepository_Create(t *testing.T) {
	s, teardown := store.TestStore(t, databaseURL)

	defer teardown("user")

	//Редактируем...
	// u, err := s.User().Create(&model.User{
	// 	Email: "user@example.org",
	// })
	// EncryptedPassword: "qwerty",
	u, err := s.User().Create(model.TestUser(t))
	assert.NoError(t, err)
	assert.NotNil(t, u)
}

// assert.NoError(t, err)
// assert.NotNil(t, u)

//РАзобраться почему невыводит ID-шник(см. UserRepository_test.go)
// assert.Equal(t, 1, u.Email)
// }

func TestUserRepository_FindByEmail(t *testing.T) {
	s, teardown := store.TestStore(t, databaseURL)
	defer teardown("user")

	email := "user@example.org"
	_, err := s.User().FindByEmail(email)
	assert.Error(t, err)

	u := model.TestUser(t)
	u.Email = email
	s.User().Create(u)
	u, err = s.User().FindByEmail(email)
	assert.NoError(t, err)
	assert.NotNil(t, u)
}

// 	u, err := s.User().Create(&model.User{
// 		Email: "user@example.org",
// 	})
// 	u, err = s.User().FindByEmail(email)
// 	assert.NoError(t, err)
// 	assert.NotNil(t, u)
// }
