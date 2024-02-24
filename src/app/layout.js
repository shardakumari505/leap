import { Inter } from "next/font/google";
import "./globals.css";
import { styled } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '80%'
});

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
