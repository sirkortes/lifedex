BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('hey', 'hey@gmail.com', 5, '2021-01-01');

-- password: hey
INSERT into login (hash, email) values ('$2a$10$CGKH.Qgt3DRdU3cHchfYUu8O8ORV4auu6g6Dk22Ej8Ex/hXzQSE7.', 'hey@gmail.com');

COMMIT;