import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';

const CartWidget = () => {
  return (
    <Badge badgeContent={23} color="secondary">
        <ShoppingCartOutlined/>
    </Badge>
  )
}

export default CartWidget