import { useEffect, useState } from 'react';

const useCartItemCount = (cart) => {
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
        });
        setItemCount(totalItems);
    }, [cart]);

    return itemCount;
};

export default useCartItemCount;
