SELECT * FROM BRANCHES
SELECT * FROM USERS
SELECT * FROM ROLES
SELECT * FROM USER_ROLE
SELECT * FROM PERMISSIONS
SELECT * FROM ROLE_PERMISSION

SELECT * FROM BATCH
SELECT * FROM ACCOUNTS
SELECT * FROM TRANSACTIONS
SELECT * FROM TRACKER_STATUS

INSERT INTO permissions (name) VALUES ('CREATE_BATCH');
INSERT INTO permissions (name) VALUES ('EDIT_BATCH');
INSERT INTO permissions (name) VALUES ('VIEW_BATCH');
INSERT INTO permissions (name) VALUES ('DELETE_BATCH');
INSERT INTO permissions (name) VALUES ('CREATE_USER');
INSERT INTO permissions (name) VALUES ('EDIT_USER');
INSERT INTO permissions (name) VALUES ('DELETE_USER');
INSERT INTO permissions (name) VALUES ('VIEW_USER');
COMMIT;

INSERT INTO roles (name) VALUES ('ROLE_SUPER_ADMIN');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');
INSERT INTO roles (name) VALUES ('ROLE_USER');
COMMIT;

INSERT INTO BRANCHES (name) VALUES ('Kampala Road Branch');
INSERT INTO BRANCHES (name) VALUES ('Mbarara Branch');
INSERT INTO BRANCHES (name) VALUES ('Jinja Branch');
INSERT INTO BRANCHES (name) VALUES ('Ntinda Branch');
INSERT INTO BRANCHES (name) VALUES ('Gulu Branch');
INSERT INTO BRANCHES (name) VALUES ('Garden City Branch');
COMMIT;

INSERT INTO TRACKER_STATUS (name) VALUES ('Request Intialized');
INSERT INTO TRACKER_STATUS (name) VALUES ('Processing');
INSERT INTO TRACKER_STATUS (name) VALUES ('Sent to Registry');
INSERT INTO TRACKER_STATUS (name) VALUES ('Sent to Branch');
INSERT INTO TRACKER_STATUS (name) VALUES ('Received at Branch');
COMMIT;

insert into role_permission(role_id, perm_id) values(1,1);
insert into role_permission(role_id, perm_id) values(1,2);
insert into role_permission(role_id, perm_id) values(1,3);
insert into role_permission(role_id, perm_id) values(1,4);
insert into role_permission(role_id, perm_id) values(1,5);
insert into role_permission(role_id, perm_id) values(1,6);
insert into role_permission(role_id, perm_id) values(1,7);
insert into role_permission(role_id, perm_id) values(1,8);
insert into role_permission(role_id, perm_id) values(2,1);
insert into role_permission(role_id, perm_id) values(2,2);
insert into role_permission(role_id, perm_id) values(2,3);
insert into role_permission(role_id, perm_id) values(2,4);
insert into role_permission(role_id, perm_id) values(2,5);
insert into role_permission(role_id, perm_id) values(2,6);
insert into role_permission(role_id, perm_id) values(2,7);
insert into role_permission(role_id, perm_id) values(2,8);
COMMIT;
