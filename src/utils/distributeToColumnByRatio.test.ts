import { distributeToColumnByRatio, Item } from "./distributeToColumnByRatio"

const COL_WIDTH = 250
const GUTTER = 15
const ITEMS = [
  { id: 1, width: 250, height: 250 },
  { id: 2, width: 250, height: 140 },
  { id: 3, width: 250, height: 458 },
  { id: 4, width: 250, height: 254 },
  { id: 5, width: 250, height: 637 },
  { id: 6, width: 250, height: 89 },
  { id: 7, width: 250, height: 132 },
  { id: 8, width: 250, height: 89 },
  { id: 9, width: 250, height: 89 },
  { id: 10, width: 250, height: 89 },
]
const OUTPUT = [
  [{ id: 1, width: 250, height: 250 }, { id: 5, width: 250, height: 637 }],
  [
    { id: 2, width: 250, height: 140 },
    { id: 4, width: 250, height: 254 },
    { id: 6, width: 250, height: 89 },
    { id: 8, width: 250, height: 89 },
    { id: 10, width: 250, height: 89 },
  ],
  [
    { id: 3, width: 250, height: 458 },
    { id: 7, width: 250, height: 132 },
    { id: 9, width: 250, height: 89 },
  ],
]

describe("distributeToColumnByRatio", () => {
  it.each([0, 2, 3, 4])("distributes by the right amount of %i columns", a => {
    expect(distributeToColumnByRatio(ITEMS, a, COL_WIDTH, GUTTER)).toHaveLength(
      a
    )
  })

  it("distributes when no items are passed", () => {
    const items: Item[] = []
    expect(distributeToColumnByRatio(items, 3, COL_WIDTH, GUTTER)).toEqual([
      [],
      [],
      [],
    ])
  })

  it("distributes less items than the column count", () => {
    const items: Item[] = [
      { id: 1, width: 250, height: 250 },
      { id: 2, width: 250, height: 140 },
    ]
    expect(distributeToColumnByRatio(items, 3, COL_WIDTH, GUTTER)).toEqual([
      [{ id: 1, width: 250, height: 250 }],
      [{ id: 2, width: 250, height: 140 }],
      [],
    ])
  })

  it("distributes items equal to the column count", () => {
    const items: Item[] = [
      { id: 1, width: 250, height: 250 },
      { id: 2, width: 250, height: 140 },
      { id: 3, width: 250, height: 458 },
    ]
    expect(distributeToColumnByRatio(items, 3, COL_WIDTH, GUTTER)).toEqual([
      [{ id: 1, width: 250, height: 250 }],
      [{ id: 2, width: 250, height: 140 }],
      [{ id: 3, width: 250, height: 458 }],
    ])
  })

  it("returns the expected output", () => {
    expect(distributeToColumnByRatio(ITEMS, 3, COL_WIDTH, GUTTER)).toEqual(
      OUTPUT
    )
  })

  it("carries the original value in the value key", () => {
    const items: Item[] = [
      { id: 1, width: 250, height: 250, value: { name: "PHOTO1" } },
      { id: 2, width: 250, height: 140, value: { name: "PHOTO2" } },
      { id: 3, width: 250, height: 458, value: { name: "PHOTO3" } },
    ]
    expect(distributeToColumnByRatio(items, 3, COL_WIDTH, GUTTER)).toEqual([
      [{ id: 1, width: 250, height: 250, value: { name: "PHOTO1" } }],
      [{ id: 2, width: 250, height: 140, value: { name: "PHOTO2" } }],
      [{ id: 3, width: 250, height: 458, value: { name: "PHOTO3" } }],
    ])
  })
})
