import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utilities/firebase/firebase.utils";
import { createAction } from "./utilities/reducer/reducer.utils";


const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        
        if (user) {
            createUserDocumentFromAuth(user);
        }

        setCurrentUser(user);
    });

      return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
