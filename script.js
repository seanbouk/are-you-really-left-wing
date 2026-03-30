// ─── DATA ───

const scales = [
    {
        id: "royalist-parliamentarian",
        labelLeft: "Royalist",
        labelRight: "Parliamentarian",
        questions: [
            {
                text: "A nation needs to choose how its head of state is determined. Which approach do you think produces the best outcomes?",
                options: [
                    { text: "A hereditary leader from a long-established family provides continuity and stability", score: -2 },
                    { text: "A leader drawn from an established lineage but guided by experienced advisors offers a good balance", score: -1 },
                    { text: "Whether the leader is born into the role or elected matters less than the checks on their power", score: 0 },
                    { text: "Leaders should be elected, but long terms and strong executive authority help ensure decisive governance", score: 1 },
                    { text: "All leadership positions should be filled through regular elections by the people", score: 2 }
                ]
            }
        ]
    },
    {
        id: "capitalist-socialist",
        labelLeft: "Capitalist",
        labelRight: "Socialist",
        questions: [
            {
                text: "A large industry in your country is struggling and may collapse. What should happen?",
                options: [
                    { text: "The market should decide \u2014 if it fails, that frees up resources for better uses", score: -2 },
                    { text: "Government should help ease the transition but let private owners restructure", score: -1 },
                    { text: "A partnership between government and industry should find a way forward together", score: 0 },
                    { text: "Government should step in with significant support to protect workers and communities", score: 1 },
                    { text: "Key industries like this should be publicly owned so this situation doesn't arise", score: 2 }
                ]
            },
            {
                text: "Who should own and run essential services like water, electricity, and transport?",
                options: [
                    { text: "Private companies competing for customers will deliver the best service", score: -2 },
                    { text: "Mostly private, with light government oversight to prevent abuse", score: -1 },
                    { text: "A mix \u2014 some run privately, some publicly, depending on what works best", score: 0 },
                    { text: "Mostly government-run, but with some private involvement where it's useful", score: 1 },
                    { text: "These should all be publicly owned \u2014 profit motives don't belong in essentials", score: 2 }
                ]
            }
        ]
    },
    {
        id: "small-large-government",
        labelLeft: "Small Government",
        labelRight: "Large Government",
        questions: [
            {
                text: "Tax revenue has increased unexpectedly. What should happen with the surplus?",
                options: [
                    { text: "Return it all to taxpayers \u2014 they know best how to spend their own money", score: -2 },
                    { text: "Mostly return it, but set a small amount aside for the most critical needs", score: -1 },
                    { text: "Split it \u2014 some returned to taxpayers, some invested in public services", score: 0 },
                    { text: "Invest most of it in improving public services and infrastructure", score: 1 },
                    { text: "Invest all of it \u2014 there are always unmet public needs that deserve funding", score: 2 }
                ]
            }
        ]
    },
    {
        id: "traditionalism-progressivism",
        labelLeft: "Traditionalist",
        labelRight: "Progressive",
        questions: [
            {
                text: "A community is debating whether to change a long-standing local custom that some people find outdated. What's your instinct?",
                options: [
                    { text: "Customs that have endured this long have proven their value and should be preserved", score: -2 },
                    { text: "Change should only happen if there's overwhelming evidence the custom causes real harm", score: -1 },
                    { text: "Each case is different \u2014 weigh the value of the custom against the specific concerns", score: 0 },
                    { text: "If a meaningful number of people feel excluded or harmed, that's reason enough to change", score: 1 },
                    { text: "Society should always be willing to move on from practices that don't serve everyone", score: 2 }
                ]
            }
        ]
    },
    {
        id: "hierarchy-equality",
        labelLeft: "Hierarchy",
        labelRight: "Equality",
        questions: [
            {
                text: "In an organisation, how should important decisions be made?",
                options: [
                    { text: "Those with the most experience and seniority should decide \u2014 it's proven and efficient", score: -2 },
                    { text: "Senior people should lead, but consult others when it makes sense", score: -1 },
                    { text: "It depends on the decision \u2014 some need top-down leadership, others benefit from wider input", score: 0 },
                    { text: "Most decisions should involve the people who are affected, with leaders coordinating", score: 1 },
                    { text: "Everyone affected by a decision should have an equal say in making it", score: 2 }
                ]
            }
        ]
    },
    {
        id: "authoritarianism-democracy",
        labelLeft: "Authoritarian",
        labelRight: "Democratic",
        questions: [
            {
                text: "During a serious national crisis, how should decisions be made?",
                options: [
                    { text: "A strong leader must act decisively without being slowed down by debate", score: -2 },
                    { text: "Leadership should have expanded powers, but with some oversight", score: -1 },
                    { text: "Crisis powers are sometimes necessary but must be temporary and strictly limited", score: 0 },
                    { text: "Democratic processes should be maintained even if they slow the response down", score: 1 },
                    { text: "Crises are exactly when democratic scrutiny matters most \u2014 no shortcuts", score: 2 }
                ]
            }
        ]
    },
    {
        id: "nationalism-internationalism",
        labelLeft: "Nationalist",
        labelRight: "Internationalist",
        questions: [
            {
                text: "When making policy, how much should a government consider impacts beyond its own borders?",
                options: [
                    { text: "A government's sole duty is to its own citizens \u2014 full stop", score: -2 },
                    { text: "Domestic needs come first, but we can help others when it costs us little", score: -1 },
                    { text: "National and international interests are usually intertwined \u2014 you have to balance both", score: 0 },
                    { text: "We have significant responsibilities to people beyond our borders", score: 1 },
                    { text: "Borders are largely arbitrary \u2014 policy should consider all people as equally important", score: 2 }
                ]
            }
        ]
    },
    {
        id: "freedom-to-freedom-from",
        labelLeft: "Freedom To",
        labelRight: "Freedom From",
        questions: [
            {
                text: "A business wants to operate in a way that some nearby residents say harms their quality of life. How should this be resolved?",
                options: [
                    { text: "The business should be free to operate \u2014 others can adapt or move", score: -2 },
                    { text: "The business should have broad freedom, with only minimal restrictions for serious harm", score: -1 },
                    { text: "A fair process should weigh the business's rights against the residents' concerns", score: 0 },
                    { text: "Residents' right to be protected from harm should usually take priority", score: 1 },
                    { text: "Nobody should be able to operate in ways that negatively affect other people's lives", score: 2 }
                ]
            }
        ]
    },
    {
        id: "preservation-reform",
        labelLeft: "Preservation",
        labelRight: "Reform",
        questions: [
            {
                text: "When an institution \u2014 a court, a legislature, a school system \u2014 isn't working well, what's the best approach?",
                options: [
                    { text: "Work within its existing framework \u2014 institutions are fragile and radical change risks making things worse", score: -2 },
                    { text: "Make careful, incremental adjustments and evaluate each step before moving on", score: -1 },
                    { text: "Some institutions need minor fixes, others need major overhauls \u2014 it depends on the case", score: 0 },
                    { text: "If something isn't working, meaningful structural change is usually what's needed", score: 1 },
                    { text: "Broken institutions should be redesigned from the ground up", score: 2 }
                ]
            }
        ]
    },
    {
        id: "individual-collectivism",
        labelLeft: "Individual Freedom",
        labelRight: "Collectivism",
        questions: [
            {
                text: "A new public health measure would benefit the community overall but restricts some personal choices. What's your view?",
                options: [
                    { text: "Personal choice should almost never be overridden, regardless of the collective benefit", score: -2 },
                    { text: "Only the most critical public needs justify limiting personal freedom", score: -1 },
                    { text: "It depends on the severity of the situation and how much the restriction actually limits you", score: 0 },
                    { text: "Community wellbeing should generally take priority over individual convenience", score: 1 },
                    { text: "We're all interconnected \u2014 contributing to the collective good is everyone's responsibility", score: 2 }
                ]
            }
        ]
    },
    {
        id: "libertarianism-regulation",
        labelLeft: "Libertarian",
        labelRight: "Regulation",
        questions: [
            {
                text: "A new technology is emerging that has both exciting potential and possible risks. What approach should government take?",
                options: [
                    { text: "Stay out of the way \u2014 innovation thrives without interference and risks sort themselves out", score: -2 },
                    { text: "Monitor developments but only step in if clear, proven harm emerges", score: -1 },
                    { text: "Set basic ground rules while leaving plenty of room for innovation", score: 0 },
                    { text: "Require thorough safety testing and compliance before it's widely adopted", score: 1 },
                    { text: "Regulate strictly from the start \u2014 better safe than sorry", score: 2 }
                ]
            }
        ]
    },
    {
        id: "property-distribution",
        labelLeft: "Property Rights",
        labelRight: "Distribution",
        questions: [
            {
                text: "A landowner holds a large area of unused land while there's a housing shortage nearby. What should happen?",
                options: [
                    { text: "It's their property \u2014 they have no obligation to do anything with it", score: -2 },
                    { text: "Encourage development through tax incentives, but ultimately respect their rights", score: -1 },
                    { text: "A combination of incentives and modest penalties for leaving land idle", score: 0 },
                    { text: "Significant taxes on unused land to push it into productive use", score: 1 },
                    { text: "The community's need for housing should override individual ownership claims", score: 2 }
                ]
            }
        ]
    }
];

// ─── STATE ───

let flatQuestions = [];
let answers = {};
let currentIndex = 0;

// ─── DOM ───

const introEl = document.getElementById("intro");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const retakeBtn = document.getElementById("retake-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultsBars = document.getElementById("results-bars");
const summaryEl = document.getElementById("summary");

// ─── INIT ───

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);
retakeBtn.addEventListener("click", resetQuiz);

function startQuiz() {
    // Flatten all questions, keeping a reference to their scale
    flatQuestions = [];
    scales.forEach(scale => {
        scale.questions.forEach((q, qi) => {
            flatQuestions.push({
                scaleId: scale.id,
                questionIndex: qi,
                text: q.text,
                options: q.options
            });
        });
    });

    answers = {};
    currentIndex = 0;

    introEl.classList.add("hidden");
    resultsEl.classList.add("hidden");
    quizEl.classList.remove("hidden");

    renderQuestion();
}

// ─── FISHER-YATES SHUFFLE ───

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ─── RENDER QUESTION ───

function renderQuestion() {
    const q = flatQuestions[currentIndex];
    questionText.textContent = q.text;

    // Progress
    const pct = ((currentIndex) / flatQuestions.length) * 100;
    progressBar.style.width = pct + "%";
    progressBar.setAttribute("aria-valuenow", Math.round(pct));
    progressText.textContent = `Question ${currentIndex + 1} of ${flatQuestions.length}`;

    // Options (shuffled)
    optionsContainer.innerHTML = "";
    const shuffled = shuffle(q.options);
    shuffled.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.text;
        btn.setAttribute("type", "button");

        // Restore selection if already answered
        const key = `${q.scaleId}_${q.questionIndex}`;
        if (answers[key] !== undefined && answers[key] === opt.score) {
            btn.classList.add("selected");
            btn.setAttribute("aria-pressed", "true");
        }

        btn.addEventListener("click", () => selectOption(key, opt.score, btn));
        optionsContainer.appendChild(btn);
    });

    // Nav state
    backBtn.disabled = currentIndex === 0;
    nextBtn.disabled = answers[`${q.scaleId}_${q.questionIndex}`] === undefined;
    nextBtn.textContent = currentIndex === flatQuestions.length - 1 ? "See Results" : "Next";
}

function selectOption(key, score, btn) {
    answers[key] = score;

    // Visual update
    document.querySelectorAll(".option-btn").forEach(b => {
        b.classList.remove("selected");
        b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("selected");
    btn.setAttribute("aria-pressed", "true");

    nextBtn.disabled = false;
}

function nextQuestion() {
    if (currentIndex < flatQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

// ─── RESULTS ───

function showResults() {
    quizEl.classList.add("hidden");
    resultsEl.classList.remove("hidden");
    resultsBars.innerHTML = "";

    let centreCount = 0;

    scales.forEach(scale => {
        // Calculate average score for this scale
        let total = 0;
        let count = 0;
        scale.questions.forEach((q, qi) => {
            const key = `${scale.id}_${qi}`;
            if (answers[key] !== undefined) {
                total += answers[key];
                count++;
            }
        });

        const avg = count > 0 ? total / count : 0; // -2 to +2
        const pct = ((avg + 2) / 4) * 100; // 0 to 100

        if (Math.abs(avg) <= 1) centreCount++;

        // Build result card
        const card = document.createElement("div");
        card.className = "result-scale";

        const labels = document.createElement("div");
        labels.className = "scale-labels";
        labels.innerHTML = `<span class="scale-label-left">${scale.labelLeft}</span><span class="scale-label-right">${scale.labelRight}</span>`;

        const track = document.createElement("div");
        track.className = "bar-track";

        const marker = document.createElement("div");
        marker.className = "bar-marker";
        marker.style.left = pct + "%";

        track.appendChild(marker);

        const desc = document.createElement("p");
        desc.className = "scale-description";
        desc.textContent = getDescription(scale.id, avg);

        card.appendChild(labels);
        card.appendChild(track);
        card.appendChild(desc);
        resultsBars.appendChild(card);
    });

    // Summary
    summaryEl.innerHTML = `
        <h2>The Bigger Picture</h2>
        <p>You scored near the centre on <strong>${centreCount} out of 12</strong> scales.</p>
        <p>${centreCount >= 8
            ? "Like most people, your views are more moderate than you might think. The political labels we use often make us feel further apart than we really are."
            : centreCount >= 5
                ? "You have some strong views, but on many issues you're closer to the middle than the edges. Most people are."
                : "You hold some strong positions \u2014 and that's completely valid. But even with firm views on some scales, you're probably closer to centre on others than you expected."
        }</p>
        <p>The point isn't where you land \u2014 it's that \"left\" and \"right\" aren't one thing. You can disagree with someone on one scale and agree completely on another. Most of us have more in common than the labels suggest.</p>
    `;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getDescription(scaleId, avg) {
    const strength = Math.abs(avg);
    let direction;

    if (strength < 0.5) return "You're right in the middle on this one.";

    const labels = {
        "royalist-parliamentarian": ["royalist", "parliamentarian"],
        "capitalist-socialist": ["capitalist", "socialist"],
        "small-large-government": ["small government", "large government"],
        "traditionalism-progressivism": ["traditionalist", "progressive"],
        "hierarchy-equality": ["hierarchy", "equality"],
        "authoritarianism-democracy": ["authoritarian", "democratic"],
        "nationalism-internationalism": ["nationalist", "internationalist"],
        "freedom-to-freedom-from": ["'freedom to'", "'freedom from'"],
        "preservation-reform": ["preservation", "reform"],
        "individual-collectivism": ["individual freedom", "collectivist"],
        "libertarianism-regulation": ["libertarian", "regulation"],
        "property-distribution": ["property rights", "distribution"]
    };

    const pair = labels[scaleId] || ["left", "right"];
    direction = avg < 0 ? pair[0] : pair[1];

    if (strength < 1) return `You lean slightly towards ${direction}.`;
    if (strength < 1.5) return `You lean towards ${direction}.`;
    return `You lean strongly towards ${direction}.`;
}

// ─── RESET ───

function resetQuiz() {
    resultsEl.classList.add("hidden");
    startQuiz();
}
