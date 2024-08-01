// PizzaContent.js
import React from 'react';
import Card from './card';
import '../card.css';

const PizzaContent = () => {
    return (
        <div>
            <Card title="چیکن باربیکیو" price="333t">
            </Card>

            <Card title="چیکن " price="330t">
            </Card>
            

            <Card title="ژامبون" price="367t">
            </Card>

            <Card title="چیکن پستو" price="345t">
            </Card>


            <Card title="سیر استیک" price="...">
            </Card>

            <Card title="مینس میت" price="435t">
            </Card>

            <Card title="بوقلمون پستو" price="387t">
            </Card>

            <Card title="مارگاریتا" price="208t">
            </Card>

            <Card title="رست بیف" price="477t">
            </Card>

            <Card title="پپرونی" price="357t">
            </Card>
        </div>
    );
};

export default PizzaContent;
