package store

import (
	"github.com/Kentabr5427/http-rest-api/internal/app/model"
)

//UserRepository ...
type UserRepository struct {
	store *Store
}

//Create ...
func (r *UserRepository) Create(u *model.User) (*model.User, error) {
	if err := u.Validate(); err != nil {
		return nil, err
	}

	if err := u.BeforeCreate(); err != nil {
		return nil, err
	}

	//данные записываються в бд, но невозращается строка!!!
	//Заменили QueryRow на Query, Запись проходит успешно но теперь не выходит просканировать ответ и записать ID-шник в &u.ID
	v, err := r.store.db.Exec("INSERT INTO user (`email`, `encryptedPassword`) VALUES(?,?)", &u.Email, &u.EncryptedPassword)

	if err != nil {
		return nil, err
	}

	//Далее следует проверка в модуле userrepository_test.go
	//assert.equal(v,1."Должно быть равно нулю")
	_, err = v.LastInsertId()

	if err != nil {
		return nil, err
	}

	return u, nil

	// if v, err := r.store.db.Query("INSERT INTO user (`email`, `encryptedPassword`) VALUES(?,?)", &u.Email, &u.EncryptedPassword); err != nil {
	// 	v.Scan(&u.ID)
	// 	fmt.Println(&u.ID)
	// 	return nil, err
	// }
}

//FindByEmail ...
func (r *UserRepository) FindByEmail(email string) (*model.User, error) {
	// u := &model.User{}
	// if _, err := r.store.db.Exec("SELECT (`id`, `email`, `encryptedPassword`) FROM user WHERE email = '?'", &u.Email); err != nil {
	// 	return nil, err
	// }
	// return u, nil

	u := &model.User{}

	if err := r.store.db.QueryRow(
		"SELECT `id`, `email`, `encryptedPassword` FROM user WHERE email = ?",
		email).Scan(
		&u.ID,
		&u.Email,
		&u.EncryptedPassword); err != nil {
		return nil, err
	}

	return u, nil
}
