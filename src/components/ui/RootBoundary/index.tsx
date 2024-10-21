import { Container } from '@mantine/core';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import classes from './RootBoundary.module.css';

const RootBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn&apos;t exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren&apos;t authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return (
    <Container className={classes.mainError}>
      Hey, what are you doing here? <Link to=".">Get out of here</Link>
    </Container>
  );
};

export default RootBoundary;
