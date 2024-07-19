// PizzaContent.js
import React from 'react';
import Card from './card';

const PizzaContent = () => {
    return (
        <div>
            <Card title="پپرونی" price="$11">
                <p>Details about Margherita Pizza</p>
            </Card>

            <Card title="ژامبون" price="270t">
                <p>Details about Pepperoni Pizza</p>
            </Card>

            <Card title="چیکن پستو" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="چیکن باربیکیو" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="سیر استیک" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="مینس میت" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="بوقلمون پستو" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="مارگاریتا" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>

            <Card title="رست بیف" price="$11">
                <p>Details about Veggie Pizza</p>
            </Card>
        </div>
    );
};

export default PizzaContent;
