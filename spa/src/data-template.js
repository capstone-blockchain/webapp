export function chartDataset(label, backGroundColor, borderGroundColor, data) {
  return {
    label,
    data,
    backgroundColor: [backGroundColor],
    borderColor: [borderGroundColor],
    borderWidth: 2
  }
}
