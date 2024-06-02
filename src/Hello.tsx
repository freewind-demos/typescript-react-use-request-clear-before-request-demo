import { useRequest } from 'ahooks';
import React, { FC, useState } from 'react';

type Props = {};

async function waitSometime(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined);
        }, time);
    });
}

export const Hello: FC<Props> = ({ }) => {
    const [renderVersion, setRenderVersion] = useState(0);

    const fetchNum1 = useRequest(async () => {
        await waitSometime(100);
        return renderVersion;
    }, {
        refreshDeps: [renderVersion],
        onBefore: (a) => {
            fetchNum1.mutate(undefined);
        }
    });

    const fetchNum2 = useRequest(async () => {
        await waitSometime(2000);
        return renderVersion;
    }, {
        refreshDeps: [renderVersion],
        onBefore: () => {
            fetchNum2.mutate(undefined);
        }
    });

    return <div className={'Hello'}>
        <button onClick={() => setRenderVersion(n => n + 1)}>Re-render ({renderVersion})</button>
        <div>
            <div>Num1: {fetchNum1.data}</div>
            <div>Num2: {fetchNum2.data}</div>
            <div>Num1==Num2: {JSON.stringify(fetchNum1.data === fetchNum2.data)}</div>
        </div>
    </div>;
}
