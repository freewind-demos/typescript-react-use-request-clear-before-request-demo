TypeScript React "use-request" Clear Before Request Demo
=================================

有时候当useRequest的dependency改变时，我们希望它之前返回的data还原为空，以免意外参数导致逻辑错误，可以使用 `onBefore: () => fetch.mutate(undefined)` 手动清空

```
npm install
npm start
```

It will open page on browser automatically.
