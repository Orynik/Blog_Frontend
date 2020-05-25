package store

import "github.com/Kentabr5427/http-rest-api/internal/app/model"

//UserRepository ...
type UserRepository interface {
	Create(*model.User) error
	FindByEmail(string) (*model.User, error)
}
