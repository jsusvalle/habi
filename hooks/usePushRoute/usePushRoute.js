import { useRouter } from 'next/router';

const usePushRoute = (urlPath) => {
    const router = useRouter();

    const onPushRoute = () => {
        router.push(urlPath);
    }

    return { onPushRoute };
};

export default usePushRoute;
