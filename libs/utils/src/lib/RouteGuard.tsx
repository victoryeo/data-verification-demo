import { useState, useEffect, ReactNode } from 'react';
import { getToken } from "next-auth/jwt";
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode
}
export function RouteGuard({ children } : Props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url : string) {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/login'];
        const isPathPublic = publicPaths?.some((path) => path == path);
        if (!isPathPublic) {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
    }

    return (authorized && children);
}
