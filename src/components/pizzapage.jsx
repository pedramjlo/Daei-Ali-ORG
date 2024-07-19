// PizzaContent.js
import React from 'react';
import Card from './card';

const PizzaContent = () => {
    return (
        <div>
            <Card title="پپرونی">
                <p>Details about Margherita Pizza</p>
            </Card>
            <Card title="ژامبون">
                <p>Details about Pepperoni Pizza</p>
            </Card>
            <Card title="چیکن پستو">
                <p>Details about Veggie Pizza</p>
            </Card>
        </div>
    );
};

export default PizzaContent;
