// components/Layout.js
import { LayoutRoot, LayoutContainer } from './StyledComponents';

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};
