import {useRequest} from "ahooks";
import {useEffect, useState} from "react";
import {nextRandomNumber} from "./nextRendomNumber";

export function useCachedHello() {
    const [time, setTime] = useState(nextRandomNumber());
    useEffect(() => {
        setInterval(() => setTime(nextRandomNumber()), 2000)
    }, []);

    return useRequest(async () => {
        return new Promise<string>(resolve => {
            setTimeout(() => {
                resolve(`Hello, ${time}!`);
            }, 1000)
        })
    }, {
        refreshDeps: [time],
        cacheKey: 'aaa'
    })
}