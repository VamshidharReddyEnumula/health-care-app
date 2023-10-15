enum ROLE {
	ADMIN,
	MAINTAINER,
	USER,
}

export const rolePermissions = {
	'user.edit': [ROLE.ADMIN, ROLE.MAINTAINER],
	'user.delete': [ROLE.ADMIN],
	'user.read': Object.values(ROLE),
};

export const routes = {
	HOME: '/',
	EDIT_USER: '/edit-user',
};

export type PermissionName = keyof typeof rolePermissions;
