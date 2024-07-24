import React from 'react';
import Card from './card';
import '../card.css';

const DrinksContent = () => {
    return (
       <div>
             <Card title="اسپرایت" price="25t">
            </Card>

            <Card title="آب معدنی" price="6t">
            </Card>

            <Card title="کوکا کولا" price="25t">
            </Card>

            <Card title="پپسی " price="25t">
            </Card>

            <Card title="دلستر" price="25t">
            </Card>

            <Card title="فانتا" price="25t">
            </Card>

            <Card title="Cold Brew" price="60t">
            </Card>
       </div>
    );
}


export default DrinksContent;