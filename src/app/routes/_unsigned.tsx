import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_unsigned')({
  component: SignedContainer,
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;

    if (isLogged) {
      throw redirect({
        to: '/',
      });
    }
  },
});


 
function SignedContainer() {
  return (
    <Outlet />
  );
}
