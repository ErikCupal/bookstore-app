import { useRef, useCallback } from 'react'

/**
 * Hook with similar behaviour as useCallback.
 * Always returns reference to the same function.
 * Does not require specifying deps.
 *
 * @param handler
 */
const useHandler = <T extends (...args: any[]) => any>(handler: T): T => {
  const handlerRef = useRef(handler)

  handlerRef.current = handler

  return useCallback((...args: any[]) => handlerRef.current(...args), [
    handlerRef,
  ]) as any
}

export default useHandler
