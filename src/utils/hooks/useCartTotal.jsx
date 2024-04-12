import { useEffect, useState } from 'react';

const useCartTotal = (cart) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cartTotal = 0;
        cart.forEach(item => {
            cartTotal += item.price * item.quantity;
        });
        setTotal(cartTotal);
    }, [cart]);

    return total;
};

export default useCartTotal;
