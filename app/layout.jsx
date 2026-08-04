import "./globals.css";
import {CartProvider} from "../components/CartContext";

export const metadata = {
 title:"SignatureMoments",
 description:"Premium products"
};

export default function RootLayout({children}){

return(
<html lang="en">
<body>

<CartProvider>
{children}
</CartProvider>

</body>
</html>
);

}
