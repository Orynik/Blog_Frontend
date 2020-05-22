package model

import (
	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
	"golang.org/x/crypto/bcrypt"
)

//User ...
type User struct {
	ID                int `db:"id"`
	Email             string
	EncryptedPassword string
	Password          string
}

//Validate ...
func (u *User) Validate() error {
	return validation.ValidateStruct(
		u,
		validation.Field(&u.Email, validation.Required, is.Email),
		// validation.Field(&u.Password, validation.Required, validation.Length(6, 100)),
		//Кастомный Волидатор, который предоставляет пакет от TheValidation ...
		validation.Field(&u.Password, validation.By(requiredIf(u.EncryptedPassword == "")), validation.Length(6, 100)),
	)
}

//BeforeCreate ...
func (u *User) BeforeCreate() error {
	//Метод ничего не принемает, но может вернуть какую либо ошибку если она произойдёт...
	if len(u.Password) > 0 {
		enc, err := encryptString(u.Password)
		if err != nil {
			return err
		}

		//"enc"- зашифрованная строчка...
		u.EncryptedPassword = enc
	}

	return nil
}
func encryptString(s string) (string, error) {
	b, err := bcrypt.GenerateFromPassword([]byte(s), bcrypt.MinCost)
	if err != nil {
		return "", err
	}

	return string(b), nil

}
