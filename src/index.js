import { Auth } from 'aws-amplify';
import authnFactory from '@noadjs/react-authn';

export default (awsConfig) => {
    Auth.configure(awsConfig);

    const fetchSessionValue = () => Auth.currentSession().catch(() => null);

    const redirectToLogin = () => Auth.federatedSignIn();

    const logOut = () => Auth.signOut();

    return authnFactory({
        fetchSessionValue,
        redirectToLogin,
        logOut
    });
};
