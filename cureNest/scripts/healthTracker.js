// Enhanced Personal Health Tracker feature with AI insights and reports

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('healthTrackerApp');
  if (!container) return;

  container.innerHTML = `
    <p class="text-gray-700 mb-4">Track your steps, heart rate, calories, sleep, water intake, and medications here.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-blue-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Steps</h3>
        <p id="stepsCount" class="text-2xl font-bold">0</p>
      </div>
      <div class="bg-red-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Heart Rate</h3>
        <p id="heartRate" class="text-2xl font-bold">-- bpm</p>
      </div>
      <div class="bg-green-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Calories Burned</h3>
        <p id="caloriesBurned" class="text-2xl font-bold">0 kcal</p>
      </div>
      <div class="bg-yellow-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Sleep</h3>
        <p id="sleepHours" class="text-2xl font-bold">0 hrs</p>
      </div>
      <div class="bg-indigo-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Water Intake</h3>
        <p id="waterIntake" class="text-2xl font-bold">0 L</p>
      </div>
      <div class="bg-purple-50 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Medications</h3>
        <p id="medicationsTaken" class="text-2xl font-bold">0</p>
      </div>
    </div>
    <div class="mt-6 flex flex-col md:flex-row md:space-x-6">
      <button id="simulateDataBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4 md:mb-0">Simulate Data</button>
      <button id="showReportBtn" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Show Weekly Report</button>
    </div>
    <div id="reportSection" class="mt-6 bg-white p-4 rounded shadow hidden">
      <h3 class="text-lg font-semibold mb-2">Weekly Report</h3>
      <div id="reportContent" class="text-gray-700"></div>
      <div id="aiAdvice" class="mt-4 p-3 bg-yellow-100 rounded text-yellow-800 font-semibold"></div>
    </div>
  `;

  const stepsCount = document.getElementById('stepsCount');
  const heartRate = document.getElementById('heartRate');
  const caloriesBurned = document.getElementById('caloriesBurned');
  const sleepHours = document.getElementById('sleepHours');
  const waterIntake = document.getElementById('waterIntake');
  const medicationsTaken = document.getElementById('medicationsTaken');
  const simulateDataBtn = document.getElementById('simulateDataBtn');
  const showReportBtn = document.getElementById('showReportBtn');
  const reportSection = document.getElementById('reportSection');
  const reportContent = document.getElementById('reportContent');
  const aiAdvice = document.getElementById('aiAdvice');

  let currentData = {
    steps: 0,
    heartRate: 0,
    calories: 0,
    sleep: 0,
    water: 0,
    medications: 0,
  };

  function generateAIAdvice(data) {
    let advice = [];
    if (data.steps < 5000) {
      advice.push("Your step count is low. Try to walk more to stay active.");
    } else if (data.steps > 10000) {
      advice.push("Great job on your steps! Keep it up.");
    } else {
      advice.push("Your step count is moderate. Aim for 10,000 steps daily.");
    }

    if (data.heartRate < 60) {
      advice.push("Your heart rate is below normal. Consult a doctor if you feel unwell.");
    } else if (data.heartRate > 100) {
      advice.push("Your heart rate is high. Try to relax and monitor it.");
    } else {
      advice.push("Your heart rate is within a normal range.");
    }

    if (data.sleep < 6) {
      advice.push("You are not getting enough sleep. Aim for 7-8 hours.");
    } else {
      advice.push("Good sleep habits. Keep it consistent.");
    }

    if (data.water < 2) {
      advice.push("Increase your water intake for better hydration.");
    } else {
      advice.push("You are well hydrated.");
    }

    return advice.join(" ");
  }

  simulateDataBtn.addEventListener('click', () => {
    // Simulate random data for demo
    currentData.steps = Math.floor(Math.random() * 15000);
    currentData.heartRate = 60 + Math.floor(Math.random() * 40);
    currentData.calories = Math.floor(Math.random() * 3000);
    currentData.sleep = (4 + Math.random() * 4).toFixed(1);
    currentData.water = (1 + Math.random() * 3).toFixed(1);
    currentData.medications = Math.floor(Math.random() * 5);

    stepsCount.textContent = currentData.steps;
    heartRate.textContent = currentData.heartRate + ' bpm';
    caloriesBurned.textContent = currentData.calories + ' kcal';
    sleepHours.textContent = currentData.sleep + ' hrs';
    waterIntake.textContent = currentData.water + ' L';
    medicationsTaken.textContent = currentData.medications;

    reportSection.classList.add('hidden');
  });

  showReportBtn.addEventListener('click', () => {
    reportContent.innerHTML = `
      <ul class="list-disc list-inside">
        <li>Average Steps: ${currentData.steps}</li>
        <li>Average Heart Rate: ${currentData.heartRate} bpm</li>
        <li>Calories Burned: ${currentData.calories} kcal</li>
        <li>Sleep Duration: ${currentData.sleep} hrs</li>
        <li>Water Intake: ${currentData.water} L</li>
        <li>Medications Taken: ${currentData.medications}</li>
      </ul>
    `;
    aiAdvice.textContent = generateAIAdvice(currentData);
    reportSection.classList.remove('hidden');
  });
});
