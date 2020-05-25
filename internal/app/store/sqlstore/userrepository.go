package sqlstore

import (
	"database/sql"

	"github.com/Kentabr5427/http-rest-api/internal/app/model"
	"github.com/Kentabr5427/http-rest-api/internal/app/store"
)

//UserRepository ...
type UserRepository struct {
	store *Store
}

//Create ...
func (r *UserRepository) Create(u *model.User) error {
	if err := u.Validate(); err != nil {
		return err
	}

	if err := u.BeforeCreate(); err != nil {
		return err
	}

	//данные записываються в бд, но невозращается строка!!!
	//Заменили QueryRow на Query, Запись проходит успешно но теперь не выходит просканировать ответ и записать ID-шник в &u.ID
	v, err := r.store.db.Exec("INSERT INTO user (`email`, `encryptedPassword`) VALUES(?,?)", &u.Email, &u.EncryptedPassword)

	if err != nil {
		return err
	}

	//Далее следует проверка в модуле userrepository_test.go
	//assert.equal(v,1."Должно быть равно нулю")
	_, err = v.LastInsertId()

	if err != nil {
		return err
	}

	return nil
}

//FindByEmail ...
func (r *UserRepository) FindByEmail(email string) (*model.User, error) {
	u := &model.User{}

	if err := r.store.db.QueryRow(
		"SELECT `id`, `email`, `encryptedPassword` FROM user WHERE email = ?",
		email).Scan(
		&u.ID,
		&u.Email,
		&u.EncryptedPassword,
	); err != nil {
		if err == sql.ErrNoRows {
			return nil, store.ErrRecordNotFound
		}
		return nil, err
	}

	return u, nil
}
