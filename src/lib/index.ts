export const calculateWidth = (
  element: HTMLElement | HTMLElement[],
  width: number | number[],
  style: string[] | string = ['fontSize', 'fontSize', 'fontSize']
) => {
  const { innerWidth, outerWidth } = window

  if (window.innerWidth <= 990) {
    removeInlineCSS(element as HTMLElement[])
    return
  }

  function resize(w: number, e: HTMLElement, st: string) {
    const calculate = (innerWidth / outerWidth) * w
    ;(e.style as any)[st] = `${calculate}rem`
  }

  if (typeof width === 'number') {
    resize(width, element as HTMLElement, style as string)
  } else if (Array.isArray(width)) {
    for (let i = 0; i < (element as HTMLElement[]).length; i++) {
      const currentWidth = width[i]
      const currentElement = (element as HTMLElement[])[i]
      const currentStyle = style[i]

      resize(currentWidth, currentElement, currentStyle)
    }
  }
}

export const calculatePercentage = () => {}

export const removeInlineCSS = (element: HTMLElement[]) => {
  for (let i = 0; i < element.length; i++) {
    const current = element[i]

    current.style.cssText = ''
  }
}
