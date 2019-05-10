// TODO: pass generic type over to value
export interface Item {
  id: number | string
  width: number
  height: number
  value?: any
}

function columnHeight(items: Item[], colWidth: number, gutter: number): number {
  const gutterHeight = Math.max(items.length - 1, 0) * gutter
  const calcRatio = (width: number, height: number) => height / width
  const itemsTotalHeight = items.reduce(
    (acc, { width, height }) => acc + calcRatio(width, height) * colWidth,
    0
  )
  return itemsTotalHeight + gutterHeight
}

export function distributeToColumnByRatio<T>(
  items: Item[],
  colCount: number,
  colWidth: number,
  gutter: number
): Item[][] {
  if (colCount === 0) {
    return []
  }

  const arr = Array.from({ length: colCount }, () => new Array())

  items.forEach(item => {
    const columnsHeight = arr.map(column =>
      columnHeight(column, colWidth, gutter)
    )
    const min = Math.min(...columnsHeight)
    const currIndex = columnsHeight.indexOf(min)

    arr[currIndex].push(item)
  })

  return arr
}
