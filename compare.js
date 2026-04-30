const comparisonData = {
    india: {
        name: "India",
        process: "First-Past-The-Post (FPTP) system for Lok Sabha. Electronic Voting Machines (EVMs) used nationwide.",
        timeline: "Phased elections over several weeks due to geographic scale. Counted in a single day.",
        rules: "Voter ID required. Compulsory ink marking on finger. Polling booths must be within 2km of every voter."
    },
    us: {
        name: "United States",
        process: "Electoral College for President. Majority of states use paper ballots with optical scanners.",
        timeline: "Election Day is the Tuesday after the first Monday in November. Early and mail-in voting available.",
        rules: "Voter registration rules vary by state. No national ID requirement, though many states require local ID."
    },
    uk: {
        name: "United Kingdom",
        process: "First-Past-The-Post for House of Commons. Manual paper ballot counting.",
        timeline: "Usually every 5 years. Short campaign period (approx. 25 days) after Parliament is dissolved.",
        rules: "Voter ID now required in person. Proxies and postal voting are common options."
    },
    germany: {
        name: "Germany",
        process: "Mixed-Member Proportional Representation. Two votes: one for a candidate, one for a party list.",
        timeline: "Elections for the Bundestag every 4 years. Held on a Sunday or public holiday.",
        rules: "Automatic voter registration for all citizens. High transparency in campaign financing."
    }
};

const selectA = document.getElementById('select-a');
const selectB = document.getElementById('select-b');
const cardA = document.getElementById('card-a');
const cardB = document.getElementById('card-b');

function updateCard(slot, countryId) {
    const data = comparisonData[countryId];
    const card = slot === 'a' ? cardA : cardB;
    
    if (!data) return;

    card.innerHTML = `
        <div class="detail-section">
            <h3><i class="fa-solid fa-gears"></i> Voting Process</h3>
            <div class="detail-item">
                <strong>${data.name} System</strong>
                <p>${data.process}</p>
            </div>
        </div>
        <div class="detail-section">
            <h3><i class="fa-solid fa-calendar-check"></i> Timeline</h3>
            <div class="detail-item">
                <strong>When they vote</strong>
                <p>${data.timeline}</p>
            </div>
        </div>
        <div class="detail-section">
            <h3><i class="fa-solid fa-scale-balanced"></i> Key Rules</h3>
            <div class="detail-item">
                <strong>Voter Requirements</strong>
                <p>${data.rules}</p>
            </div>
        </div>
    `;
}

selectA.addEventListener('change', (e) => updateCard('a', e.target.value));
selectB.addEventListener('change', (e) => updateCard('b', e.target.value));
