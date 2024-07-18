import React from "react";
import { useSpring, animated } from "react-spring";
import { TbHandFinger } from "react-icons/tb";


const BouncingArrow = () => {
    const props = useSpring({
        to: async (next) => {
            while (true) {
                await next({ y: 0 });
                await next({ y: 20 });
            }
        },
        from: { y: 20 },
        reset: true,
    });

    return (
        <animated.div style={props} className="bounce">
            <TbHandFinger />
        </animated.div>
    );
};

export default BouncingArrow;
