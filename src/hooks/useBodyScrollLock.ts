import { RefObject, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const useBodyScrollLock = (ref: RefObject<any>) => {
  useEffect(() => {
    const element = ref.current

    if (element) {
      disableBodyScroll(element)
    }

    return () => {
      if (element) {
        enableBodyScroll(element)
      }
    }
  }, [ref])
}

export default useBodyScrollLock
