// PizzaContent.js
import React from 'react';
import Card from './card';

const PizzaContent = () => {
    return (
        <div>
            <Card title="Margherita Pizza">
                <p>Details about Margherita Pizza</p>
            </Card>
            <Card title="Pepperoni Pizza">
                <p>Details about Pepperoni Pizza</p>
            </Card>
            <Card title="Veggie Pizza">
                <p>Details about Veggie Pizza</p>
            </Card>
        </div>
    );
};

export default PizzaContent;
