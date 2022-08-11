import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <Badge badgeContent={test.totalProducts()} color="secondary">
        <ShoppingCartOutlined  color="primary"/>
    </Badge>
  )
}

export default CartWidget