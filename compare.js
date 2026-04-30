const comparisonData = {
    india: {
        name: "India",
        votingProcess: {
            title: "Multi-Phase Voting",
            desc: "Due to the massive population, elections are held in multiple phases over several weeks. Electronic Voting Machines (EVMs) with VVPAT are used nationwide."
        },
        timeline: {
            title: "5-Year Term",
            desc: "General elections for the Lok Sabha are held every 5 years. The process starts with the Election Commission's announcement, followed by nominations and campaigning."
        },
        rules: {
            title: "First-Past-The-Post",
            desc: "India uses the FPTP system. The candidate with the most votes in a constituency wins. Citizens aged 18+ are eligible to vote."
        }
    },
    us: {
        name: "United States",
        votingProcess: {
            title: "Single Day & Early Voting",
            desc: "Elections are primarily held on the Tuesday after the first Monday in November. Methods include in-person voting, early voting, and mail-in ballots."
        },
        timeline: {
            title: "Fixed Cycles",
            desc: "Presidential elections occur every 4 years. Congressional elections (Midterms) occur every 2 years. Primary elections precede the General election."
        },
        rules: {
            title: "Electoral College",
            desc: "The President is elected via the Electoral College, not directly by popular vote. For Congress, plurality voting is standard. Voting age is 18."
        }
    },
    uk: {
        name: "United Kingdom",
        votingProcess: {
            title: "Single Day (Thursday)",
            desc: "Traditional voting takes place on a single Thursday at local polling stations. Paper ballots are standard, marked with an 'X'."
        },
        timeline: {
            title: "Maximum 5 Years",
            desc: "Parliamentary terms are a maximum of 5 years, though 'Snap Elections' can be called earlier by the Prime Minister."
        },
        rules: {
            title: "Parliamentary Sovereignty",
            desc: "Uses First-Past-The-Post for the House of Commons. The leader of the party with a majority becomes Prime Minister. Voting age is 18."
        }
    },
    germany: {
        name: "Germany",
        votingProcess: {
            title: "Two-Vote System",
            desc: "Voters cast two votes: one for a local candidate and one for a party list. This ensures a mix of local representation and proportional balance."
        },
        timeline: {
            title: "4-Year Cycle",
            desc: "Federal elections (Bundestagswahl) are held every 4 years on a Sunday or public holiday."
        },
        rules: {
            title: "Mixed-Member Proportional",
            desc: "A complex but fair system that combines direct election with party-list representation. 5% threshold required for parties to enter parliament. Voting age is 18."
        }
    }
};

const selectA = document.getElementById('select-a');
const selectB = document.getElementById('select-b');
const cardA = document.getElementById('card-a');
const cardB = document.getElementById('card-b');

function renderComparison(countryKey, container) {
    const data = comparisonData[countryKey];
    if (!data) return;

    container.innerHTML = `
        <div class="detail-section">
            <h3>Voting Process</h3>
            <div class="detail-item">
                <strong>${data.votingProcess.title}</strong>
                <p>${data.votingProcess.desc}</p>
            </div>
        </div>
        <div class="detail-section">
            <h3>Election Timeline</h3>
            <div class="detail-item">
                <strong>${data.timeline.title}</strong>
                <p>${data.timeline.desc}</p>
            </div>
        </div>
        <div class="detail-section">
            <h3>Key Rules</h3>
            <div class="detail-item">
                <strong>${data.rules.title}</strong>
                <p>${data.rules.desc}</p>
            </div>
        </div>
    `;
}

selectA.addEventListener('change', (e) => {
    renderComparison(e.target.value, cardA);
});

selectB.addEventListener('change', (e) => {
    renderComparison(e.target.value, cardB);
});
