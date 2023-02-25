import React from "react"

// Improved version of https://usehooks.com/useOnClickOutside/
export const useClickOutside = (ref: any, handler: any) => {
	React.useEffect(() => {
		let startedInside = false
		let startedWhenMounted = false

		const listener = (event: MouseEvent) => {
			// Do nothing if `mousedown` or `touchstart` started inside ref element
			if (startedInside || !startedWhenMounted) return
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) return

			handler(event)
		}

		const validateEventStart = (event: MouseEvent | TouchEvent) => {
			startedWhenMounted = ref.current
			startedInside = ref.current && ref.current.contains(event.target)
		}

		document.addEventListener("mousedown", validateEventStart)
		document.addEventListener("touchstart", validateEventStart)
		document.addEventListener("click", listener)

		return () => {
			document.removeEventListener("mousedown", validateEventStart)
			document.removeEventListener("touchstart", validateEventStart)
			document.removeEventListener("click", listener)
		}
	}, [ref, handler])
}

// Saves incoming handler to the ref in order to avoid "useCallback hell"
function useEventCallback<T>(handler?: (value: T) => void): (value: T) => void {
	const callbackRef = React.useRef(handler)

	React.useEffect(() => {
		callbackRef.current = handler
	})

	return React.useCallback((value: T) => callbackRef.current && callbackRef.current(value), [])
}

export { useEventCallback }
