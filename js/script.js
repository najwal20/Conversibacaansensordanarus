function convert() {
    const inputRange = document.getElementById('inputRange').value.split(' to ').map(parseFloat);
    const knownValue = parseFloat(document.getElementById('knownValue').value);
    const conversionType = document.getElementById('conversionType').value;
    
    let result;
    let calculationProcess;
  
    if (conversionType === 'suhuToArus') {
      result = ((knownValue - inputRange[0]) / (inputRange[1] - inputRange[0])) * (20 - 4) + 4;
      calculationProcess = `(${knownValue} °C - ${inputRange[0]} °C) / (${inputRange[1]} °C - ${inputRange[0]} °C) * (20 mA - 4 mA) + 4 mA`;
    } else if (conversionType === 'arusToSuhu') {
      result = ((knownValue - 4) / (20 - 4)) * (inputRange[1] - inputRange[0]) + inputRange[0];
      calculationProcess = `(${knownValue} mA - 4 mA) / (20 mA - 4 mA) * (${inputRange[1]} °C - ${inputRange[0]} °C) + ${inputRange[0]} °C`;
    } else {
      result = 'Jenis konversi tidak valid.';
      calculationProcess = '';
    }
  
    document.getElementById('result').innerHTML = `Hasil Konversi: ${result.toFixed(4)} ${conversionType === 'suhuToArus' ? 'mA' : '°C'}`;
    document.getElementById('calculation').innerHTML = `Proses Perhitungan: ${calculationProcess}`;
  }
  
  function resetForm() {
    document.getElementById('inputRange').value = '';
    document.getElementById('knownValue').value = '';
    document.getElementById('conversionType').value = 'suhuToArus';
    document.getElementById('result').innerHTML = '';
    document.getElementById('calculation').innerHTML = '';
  }
  