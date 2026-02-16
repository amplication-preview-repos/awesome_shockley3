import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderStatusList } from "./orderStatus/OrderStatusList";
import { OrderStatusCreate } from "./orderStatus/OrderStatusCreate";
import { OrderStatusEdit } from "./orderStatus/OrderStatusEdit";
import { OrderStatusShow } from "./orderStatus/OrderStatusShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { ProductoList } from "./producto/ProductoList";
import { ProductoCreate } from "./producto/ProductoCreate";
import { ProductoEdit } from "./producto/ProductoEdit";
import { ProductoShow } from "./producto/ProductoShow";
import { PedidoList } from "./pedido/PedidoList";
import { PedidoCreate } from "./pedido/PedidoCreate";
import { PedidoEdit } from "./pedido/PedidoEdit";
import { PedidoShow } from "./pedido/PedidoShow";
import { OrdenDeCompraList } from "./ordenDeCompra/OrdenDeCompraList";
import { OrdenDeCompraCreate } from "./ordenDeCompra/OrdenDeCompraCreate";
import { OrdenDeCompraEdit } from "./ordenDeCompra/OrdenDeCompraEdit";
import { OrdenDeCompraShow } from "./ordenDeCompra/OrdenDeCompraShow";
import { TalleList } from "./talle/TalleList";
import { TalleCreate } from "./talle/TalleCreate";
import { TalleEdit } from "./talle/TalleEdit";
import { TalleShow } from "./talle/TalleShow";
import { CarritoList } from "./carrito/CarritoList";
import { CarritoCreate } from "./carrito/CarritoCreate";
import { CarritoEdit } from "./carrito/CarritoEdit";
import { CarritoShow } from "./carrito/CarritoShow";
import { ColorList } from "./color/ColorList";
import { ColorCreate } from "./color/ColorCreate";
import { ColorEdit } from "./color/ColorEdit";
import { ColorShow } from "./color/ColorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Ambos Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="OrderStatus"
          list={OrderStatusList}
          edit={OrderStatusEdit}
          create={OrderStatusCreate}
          show={OrderStatusShow}
        />
        <Resource
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="Producto"
          list={ProductoList}
          edit={ProductoEdit}
          create={ProductoCreate}
          show={ProductoShow}
        />
        <Resource
          name="Pedido"
          list={PedidoList}
          edit={PedidoEdit}
          create={PedidoCreate}
          show={PedidoShow}
        />
        <Resource
          name="OrdenDeCompra"
          list={OrdenDeCompraList}
          edit={OrdenDeCompraEdit}
          create={OrdenDeCompraCreate}
          show={OrdenDeCompraShow}
        />
        <Resource
          name="Talle"
          list={TalleList}
          edit={TalleEdit}
          create={TalleCreate}
          show={TalleShow}
        />
        <Resource
          name="Carrito"
          list={CarritoList}
          edit={CarritoEdit}
          create={CarritoCreate}
          show={CarritoShow}
        />
        <Resource
          name="Color"
          list={ColorList}
          edit={ColorEdit}
          create={ColorCreate}
          show={ColorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
