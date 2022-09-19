import React, {FC, useState} from 'react';
import './Hello.pcss';
import {Component1} from "./Component1";
import {Component2} from "./Component2";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [renderVersion, setRenderVersion] = useState(0);
    return <div className={'Hello'}>
        <button onClick={() => setRenderVersion(n => n + 1)}>Re-render ({renderVersion})</button>
        <div>
            <Component1/>
            <Component2/>
        </div>
    </div>;
}
