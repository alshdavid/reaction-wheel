import { useState, useEffect } from 'preact/hooks'
import rw from 'reaction-wheel'

export const useProxy = <T,>(source: rw.ProxySubscriber<T>): T => {
  const [ _, setValue ] = useState({})
  
  useEffect(() => {
    const sub = source.subscribe(v => setValue({}))
    return () => sub.unsubscribe()
  }, [ source ])

  return source as any
}