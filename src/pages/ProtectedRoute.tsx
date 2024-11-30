// ProtectedRoute.tsx
import {useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Skeleton } from '@/components/ui/skeleton';

interface ProtectedRouteProps {
  authenticated: React.ReactElement;
  unauthenticated?: React.ReactElement;  
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ authenticated, unauthenticated }) => {
    const auth = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        auth.checkAuth().then((res) => {    
            if (res) {
                setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }
        })
    }, []);

    if (isAuthenticated === null) {
    return (
        <Skeleton />
    );
    }

    return isAuthenticated ? authenticated : unauthenticated;
};

export default ProtectedRoute;