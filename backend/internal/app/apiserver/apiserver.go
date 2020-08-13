package apiserver

import (
	"database/sql"
	"net/http"

	"github.com/Kentabr5427/http-rest-api/internal/app/store/sqlstore"
	"github.com/gorilla/sessions"
)

//Start ..
func Start(config *Config) error {
	db, err := newDB(config.DatabaseURL)
	if err != nil {
		return err
	}

	defer db.Close()
	store := sqlstore.New(db)
	sessionStore := sessions.NewCookieStore([]byte(config.SessionKey))
	srv := newServer(store, sessionStore)

	return http.ListenAndServe(config.BindAddr, srv)
}

func newDB(DatabaseURL string) (*sql.DB, error) {
	db, err := sql.Open("mysql", DatabaseURL)
	if err != nil {
		return nil, err
	}

	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}