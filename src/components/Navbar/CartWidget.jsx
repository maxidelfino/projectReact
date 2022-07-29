import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';

const CartWidget = (props) => {
  return (
    <Badge badgeContent={props.count} color="secondary">
        <ShoppingCartOutlined  color="primary"/>
    </Badge>
  )
}

export default CartWidget