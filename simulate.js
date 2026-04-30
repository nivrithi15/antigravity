const candidates = {
    alex: { name: "Alex Rivera", votes: 0 },
    sam: { name: "Sam Taylor", votes: 0 },
    jordan: { name: "Jordan Lee", votes: 0 }
};

let selectedId = null;

const DOM = {
    selectionStep: document.getElementById('step-selection'),
    countingStep: document.getElementById('step-counting'),
    resultsStep: document.getElementById('step-results'),
    
    candidateCards: document.querySelectorAll('.candidate-card'),
    castVoteBtn: document.getElementById('cast-vote-btn'),
    
    progressFill: document.getElementById('count-progress'),
    countingDetail: document.getElementById('counting-detail'),
    
    resultsChart: document.getElementById('results-chart'),
    winnerAnnouncement: document.getElementById('winner-announcement'),
    restartBtn: document.getElementById('restart-sim')
};

// --- SELECTION LOGIC ---
DOM.candidateCards.forEach(card => {
    card.addEventListener('click', () => {
        // Clear previous
        DOM.candidateCards.forEach(c => c.classList.remove('selected'));
        
        // Select current
        card.classList.add('selected');
        selectedId = card.dataset.id;
        DOM.castVoteBtn.disabled = false;
    });
});

DOM.castVoteBtn.addEventListener('click', startCounting);

// --- COUNTING LOGIC ---
async function startCounting() {
    DOM.selectionStep.style.display = 'none';
    DOM.countingStep.style.display = 'block';
    
    const steps = [
        { text: "Securing Ballot Box...", progress: 20 },
        { text: "Verifying Digital Signatures...", progress: 45 },
        { text: "Tallying Constituencies...", progress: 75 },
        { text: "Auditing Results...", progress: 95 },
        { text: "Finalizing Count...", progress: 100 }
    ];
    
    for (const step of steps) {
        DOM.countingDetail.innerText = step.text;
        DOM.progressFill.style.width = `${step.progress}%`;
        await new Promise(r => setTimeout(r, 800));
    }
    
    showResults();
}

// --- RESULTS LOGIC ---
function showResults() {
    DOM.countingStep.style.display = 'none';
    DOM.resultsStep.style.display = 'block';
    
    // Simulate other votes (random distribution)
    const totalSimulated = 1000;
    candidates.alex.votes = Math.floor(Math.random() * 300) + 200;
    candidates.sam.votes = Math.floor(Math.random() * 300) + 200;
    candidates.jordan.votes = totalSimulated - candidates.alex.votes - candidates.sam.votes;
    
    // Add user's vote
    candidates[selectedId].votes += 1;
    const finalTotal = totalSimulated + 1;

    // Find winner
    const sorted = Object.values(candidates).sort((a, b) => b.votes - a.votes);
    const winner = sorted[0];
    
    DOM.winnerAnnouncement.innerHTML = `
        <i class="fa-solid fa-trophy"></i> 
        ${winner.name} has won the Voxara City Election!
    `;

    // Render Chart
    DOM.resultsChart.innerHTML = '';
    Object.entries(candidates).forEach(([id, data]) => {
        const percentage = (data.votes / finalTotal) * 100;
        const row = document.createElement('div');
        row.className = 'result-row';
        row.innerHTML = `
            <div class="result-info">
                <span>${data.name} ${id === selectedId ? '(Your Choice)' : ''}</span>
                <span>${data.votes.toLocaleString()} votes (${percentage.toFixed(1)}%)</span>
            </div>
            <div class="result-bar-bg">
                <div class="result-bar-fill ${id === selectedId ? 'user-choice' : ''}" style="width: 0%"></div>
            </div>
        `;
        DOM.resultsChart.appendChild(row);
        
        // Animate bars
        setTimeout(() => {
            row.querySelector('.result-bar-fill').style.width = `${percentage}%`;
        }, 100);
    });
}

DOM.restartBtn.addEventListener('click', () => {
    selectedId = null;
    DOM.castVoteBtn.disabled = true;
    DOM.candidateCards.forEach(c => c.classList.remove('selected'));
    DOM.resultsStep.style.display = 'none';
    DOM.selectionStep.style.display = 'block';
});
