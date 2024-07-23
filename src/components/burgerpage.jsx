import React, { useState, useEffect } from 'react';
import Card from './card';
import '../card.css';

const BurgerContent = () => {
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        // Check if user has visited before
        const interacted = localStorage.getItem('card-interacted');
        if (interacted) {
            setIsFirstVisit(false);
        }
    }, []);

    const handleCardInteraction = () => {
        localStorage.setItem('card-interacted', 'true');
        setIsFirstVisit(false);
    };

    return (
        <div>
            <Card title="شیکاگو" price="240t" isExpandable={true} className="burger-card" isHighlighted={isFirstVisit} onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله - پنیر گودا - سس برگر و سس باربیکیو - پیاز کاراملی</p>
            </Card>

            <Card title="پاریس" price="270t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله - پنیر گودا و پنیر ترکیبی - قارچ - سس برگر و سس خردل شیرین</p>
            </Card>

            <Card title="کلورادو" price="299t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله شنیسل مرغ گریل شده پنیر گودا سس برگر و سس خردل شیرین - پیاز خورد شده</p>
            </Card>

            <Card title="فلوریدا" price="255t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله - پنیر گودا - پیاز خورد شده - سس برگر و سس قارچ و سس خردل شیرین</p>
            </Card>

            <Card title="مکزیکانو" price="259t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله - پنیر گودا - هالوپینو - پپرونی - سس برگر و سس چیلی تای - پیاز خورد شده</p>
            </Card>

            <Card title=" میلان" price="257t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 برگر 80 گرمی گوساله پنیر گورگونزولا - پنیر گودا - گوجه خشک - سس برگر و سس پستو</p>
            </Card>

            <Card title="تگزاس " price="288t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>2 عدد برگر 80 گرمی گوساله بیکن - پنیر گودا - قارچ با سس باربیکیو تفت داده شده - نان مک - سس برگر و سس خامه شیرین</p>
            </Card>

            <Card title="دبل فولی " price="477t" isExpandable={true} className="burger-card" onExpand={handleCardInteraction}>
                <p style={{ direction: "rtl" }}>4 عدد برگر 80 گرمی گوساله - پنیر گودا 2 عدد - سس برگر و سس خردل شیرین و سس قارج - بیکن کریسپی</p>
            </Card>
        </div>
    );
}

export default BurgerContent;
