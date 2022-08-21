import { useEffect, useState } from 'react';


const UPDATE_CYCLE = 1000

const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
    US = `en-US`,
    JP = `ja-JP`
}


const getLocalFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    // タイマーセットをするための副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)
        return () => {
            clearInterval(timer)
        }
    }, [])

    // localstorageから値を取得する副作用
    useEffect(() => {
        const savedLocal = localStorage.getItem(KEY_LOCAL)
        console.log(savedLocal)
        if (savedLocal !== null) {
            setLocale(getLocalFromString(savedLocal))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCAL, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select value={locale} onChange={(e) => setLocale(getLocalFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}
export default Clock
