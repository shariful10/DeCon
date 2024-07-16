// Calculate DPC based on building core data
export const calculateDPC = (data, type) => {
  if (!data) return 0;

  const CTn = data?.connectionType?.score || 0;
  const CAn = data?.connectionAccessibility?.score || 0;
  const IDn = data?.independency?.score || 0;
  const GPEn = data?.gpe?.score || 0;
  const connectionNumber = data?.connectionNumber?.score || 0;
  const barriersScore = data?.barriers?.score || 0;
  const barriersNumber = data?.barriersNumber?.score || 0;

  const DPcnTotalValue = 1 / CTn + 1 / CAn;
  const DPcenTotalValue = 1 / IDn + 1 / GPEn;
  const DPcn = 2 / DPcnTotalValue;
  const DPcen = 2 / DPcenTotalValue;
  const DPCSlice = 1 / DPcn + 1 / DPcen;
  let totalDPC = (2 / DPCSlice) * 100;

  if (barriersScore !== 0) {
    if (connectionNumber === 1 && barriersNumber > 0) {
      totalDPC = totalDPC - 10;
    } else {
      totalDPC = totalDPC - barriersNumber;
    }
  }

  return totalDPC;
};
