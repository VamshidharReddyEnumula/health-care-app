// import { FC } from 'react';
// import { usePermissions } from './hooks';
// import { Navigate } from 'react-router-dom';

// export const ProtectedRoute: FC<ProtectedRouteProps> = ({
// 	permission,
// 	children,
// }) => {
// 	const { hasPersmission } = usePermissions();
// 	if (!hasPersmission(permission)) {
// 		return <Navigate to={Routes.HOME} />;
// 	}
// 	return children;
// };
