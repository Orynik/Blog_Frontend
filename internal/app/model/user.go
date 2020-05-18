package model

//User ...
type User struct {
	ID                int `db:"id"`
	Email             string
	EncryptedPassword string
}
