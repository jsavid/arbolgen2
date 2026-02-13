const data = {
    nodes: [
        // Level 0: Great-Great-Great-Great-Grandparents
        { id: "Gregorio Savid Luque", level: 0, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Isabel Mansilla", level: 0, gender: "female", side: "paternal", subBranch: "savid" },
        { id: "Javier Carballo", level: 0, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Rosario Carrilo Albornoz", level: 0, gender: "female", side: "paternal", subBranch: "savid" },
        { id: "Rafael García", level: 0, gender: "male", side: "paternal", subBranch: "garcia" },
        { id: "Agustina Montaño", level: 0, gender: "female", side: "paternal", subBranch: "garcia" },
        { id: "Fernando García", level: 0, gender: "male", side: "paternal", subBranch: "garcia" },
        { id: "Juana Josefa Zavalía", level: 0, gender: "female", side: "paternal", subBranch: "garcia" },

        // Level 1: Great-Great-Great-Grandparents
        { id: "Domingo del Rosario Savid Mansilla", level: 1, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Rosario Carballo y Carrillo", level: 1, gender: "female", side: "paternal", subBranch: "savid" },
        { id: "Tomás García Montaño", level: 1, gender: "male", side: "paternal", subBranch: "garcia" },
        { id: "Juana de Zavalía y García", level: 1, gender: "female", side: "paternal", subBranch: "garcia" },
        { id: "Juan Irusta", level: 1, gender: "male", side: "maternal", subBranch: "garcia" },
        { id: "Adela Irusta", level: 1, gender: "female", side: "maternal", subBranch: "garcia" },
        { id: "Antonio Teixeira", level: 1, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "Zeferina Freitas", level: 1, gender: "female", side: "maternal", subBranch: "teixeira" },
        { id: "Dolores Gudiño", level: 1, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Pucheta", level: 1, gender: "female", side: "maternal", subBranch: "teixeira" },
        { id: "Domingo García de Rosas", level: 1, gender: "male", side: "maternal", subBranch: "garcia" },
        { id: "Patricia O'Connor", level: 1, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 2: Great-Great-Grandparents
        { id: "José Gregorio Savid Carballo", level: 2, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Carmen García Zavalla", level: 2, gender: "female", side: "paternal", subBranch: "savid" },
        { id: "Fenelón V. Torres", level: 2, gender: "male", side: "paternal", subBranch: "torres" },
        { id: "María A. Omil", level: 2, gender: "female", side: "paternal", subBranch: "torres" },
        { id: "João Teixeira", level: 2, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "Isabel Estaurofila Gudiño", level: 2, gender: "female", side: "maternal", subBranch: "teixeira" },
        { id: "Cristóbal García", level: 2, gender: "male", side: "maternal", subBranch: "garcia" },
        { id: "María Fredebinda Irusta", level: 2, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 3: Great-Grandparents
        { id: "Jose Tomás Savid García", level: 3, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Maria Ángela Torres", level: 3, gender: "female", side: "paternal", subBranch: "torres" },
        { id: "Juan Jesús Teixeira", level: 3, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Luisa García", level: 3, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 4: Grandparents
        { id: "Fenelón Savid", level: 4, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Carmen Beatriz Teixeira", level: 4, gender: "female", side: "maternal", subBranch: "center" },
        { id: "Luis Eduardo Savid", level: 4, gender: "male", side: "paternal", subBranch: "center" },
        { id: "Juan Cristóbal Teixeira", level: 4, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Isabel Teixeira", level: 4, gender: "female", side: "maternal", subBranch: "teixeira" },

        // Level 5: Parents & Sibling
        { id: "Javier Francisco Savid Teixeira", level: 5, gender: "male", side: "center", subBranch: "center" },
        { id: "Ayelén Savid Teixeira", level: 5, gender: "female", side: "center", subBranch: "center" },
        { id: "Rayén Savid Teixeira", level: 5, gender: "female", side: "center", subBranch: "center" },

        // Hubs (Mapping parents to children)
        { id: "hub-gs-im", level: 0, isHub: true, p1: "Gregorio Savid Luque", p2: "Isabel Mansilla" },
        { id: "hub-jc-rc", level: 0, isHub: true, p1: "Javier Carballo", p2: "Rosario Carrilo Albornoz" },
        { id: "hub-rg-am", level: 0, isHub: true, p1: "Rafael García", p2: "Agustina Montaño" },
        { id: "hub-fg-jjz", level: 0, isHub: true, p1: "Fernando García", p2: "Juana Josefa Zavalía" },
        { id: "hub-tg-jz", level: 1, isHub: true, p1: "Tomás García Montaño", p2: "Juana de Zavalía y García" },
        { id: "hub-dm-rc", level: 1, isHub: true, p1: "Domingo del Rosario Savid Mansilla", p2: "Rosario Carballo y Carrillo" },
        { id: "hub-ji-ai", level: 1, isHub: true, p1: "Juan Irusta", p2: "Adela Irusta" },
        { id: "hub-at-zf", level: 1, isHub: true, p1: "Antonio Teixeira", p2: "Zeferina Freitas" },
        { id: "hub-dg-mp", level: 1, isHub: true, p1: "Dolores Gudiño", p2: "María Pucheta" },
        { id: "hub-dg-po", level: 1, isHub: true, p1: "Domingo García de Rosas", p2: "Patricia O'Connor" },
        { id: "hub-lg-cg", level: 2, isHub: true, p1: "José Gregorio Savid Carballo", p2: "Carmen García Zavalla" },
        { id: "hub-ft-mo", level: 2, isHub: true, p1: "Fenelón V. Torres", p2: "María A. Omil" },
        { id: "hub-jt-ib", level: 2, isHub: true, p1: "João Teixeira", p2: "Isabel Estaurofila Gudiño" },
        { id: "hub-cg-mi", level: 2, isHub: true, p1: "Cristóbal García", p2: "María Fredebinda Irusta" },
        { id: "hub-jt-ma", level: 3, isHub: true, p1: "Maria Ángela Torres", p2: "Jose Tomás Savid García" },
        { id: "hub-jj-ml", level: 3, isHub: true, p1: "Juan Jesús Teixeira", p2: "María Luisa García" },
        { id: "hub-le-cb", level: 4, isHub: true, p1: "Luis Eduardo Savid", p2: "Carmen Beatriz Teixeira" }
    ],
    links: [
        { source: "Gregorio Savid Luque", target: "hub-gs-im" }, { source: "Isabel Mansilla", target: "hub-gs-im" },
        { source: "Javier Carballo", target: "hub-jc-rc" }, { source: "Rosario Carrilo Albornoz", target: "hub-jc-rc" },
        { source: "Rafael García", target: "hub-rg-am" }, { source: "Agustina Montaño", target: "hub-rg-am" },
        { source: "Fernando García", target: "hub-fg-jjz" }, { source: "Juana Josefa Zavalía", target: "hub-fg-jjz" },
        { source: "Tomás García Montaño", target: "hub-tg-jz" }, { source: "Juana de Zavalía y García", target: "hub-tg-jz" },
        { source: "Domingo del Rosario Savid Mansilla", target: "hub-dm-rc" }, { source: "Rosario Carballo y Carrillo", target: "hub-dm-rc" },
        { source: "Juan Irusta", target: "hub-ji-ai" }, { source: "Adela Irusta", target: "hub-ji-ai" },
        { source: "Antonio Teixeira", target: "hub-at-zf" }, { source: "Zeferina Freitas", target: "hub-at-zf" },
        { source: "Dolores Gudiño", target: "hub-dg-mp" }, { source: "María Pucheta", target: "hub-dg-mp" },
        { source: "Domingo García de Rosas", target: "hub-dg-po" }, { source: "Patricia O'Connor", target: "hub-dg-po" },
        { source: "José Gregorio Savid Carballo", target: "hub-lg-cg" }, { source: "Carmen García Zavalla", target: "hub-lg-cg" },
        { source: "Fenelón V. Torres", target: "hub-ft-mo" }, { source: "María A. Omil", target: "hub-ft-mo" },
        { source: "João Teixeira", target: "hub-jt-ib" }, { source: "Isabel Estaurofila Gudiño", target: "hub-jt-ib" },
        { source: "Cristóbal García", target: "hub-cg-mi" }, { source: "María Fredebinda Irusta", target: "hub-cg-mi" },
        { source: "Jose Tomás Savid García", target: "hub-jt-ma" }, { source: "Maria Ángela Torres", target: "hub-jt-ma" },
        { source: "Juan Jesús Teixeira", target: "hub-jj-ml" }, { source: "María Luisa García", target: "hub-jj-ml" },
        { source: "Luis Eduardo Savid", target: "hub-le-cb" }, { source: "Carmen Beatriz Teixeira", target: "hub-le-cb" },

        { source: "hub-gs-im", target: "Domingo del Rosario Savid Mansilla" }, { source: "hub-jc-rc", target: "Rosario Carballo y Carrillo" },
        { source: "hub-dm-rc", target: "José Gregorio Savid Carballo" }, { source: "hub-rg-am", target: "Tomás García Montaño" },
        { source: "hub-fg-jjz", target: "Juana de Zavalía y García" }, { source: "hub-tg-jz", target: "Carmen García Zavalla" },
        { source: "hub-ji-ai", target: "María Fredebinda Irusta" }, { source: "hub-at-zf", target: "João Teixeira" },
        { source: "hub-dg-mp", target: "Isabel Estaurofila Gudiño" }, { source: "hub-dg-po", target: "Cristóbal García" },
        { source: "hub-lg-cg", target: "Jose Tomás Savid García" }, { source: "hub-ft-mo", target: "Maria Ángela Torres" },
        { source: "hub-jt-ib", target: "Juan Jesús Teixeira" }, { source: "hub-cg-mi", target: "María Luisa García" },
        { source: "hub-jt-ma", target: "Luis Eduardo Savid" }, { source: "hub-jt-ma", target: "Fenelón Savid" },
        { source: "hub-jj-ml", target: "Carmen Beatriz Teixeira" }, { source: "hub-jj-ml", target: "Juan Cristóbal Teixeira" },
        { source: "hub-jj-ml", target: "María Isabel Teixeira" }, { source: "hub-le-cb", target: "Javier Francisco Savid Teixeira" },
        { source: "hub-le-cb", target: "Ayelén Savid Teixeira" }, { source: "hub-le-cb", target: "Rayén Savid Teixeira" }
    ]
};

// --- CONFIGURATION ---
const CARD_W = 220;
const CARD_H = 80;
const LEVEL_H = 300;
const FAMILY_GAP = 120; // Distance between family units

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#genealogy-tree").attr("viewBox", [0, 0, width, height]);
const gMain = svg.append("g");

const zoom = d3.zoom().scaleExtent([0.1, 3]).on("zoom", (e) => gMain.attr("transform", e.transform));
svg.call(zoom);

const nodes = data.nodes.filter(n => !n.isHub);
const hubs = data.nodes.filter(n => n.isHub);

// 1. Build relational map
nodes.forEach(n => {
    n.parentsHub = hubs.find(h => data.links.find(l => l.source === h.id && l.target === n.id));
    n.marriageHub = hubs.find(h => h.p1 === n.id || h.p2 === n.id);
});

// 2. Recursive Width Calculation
// widthTree(node) = the total horizontal space required for this node AND its ancestors
const memoWidth = new Map();
function calculateWidth(nodeId) {
    if (memoWidth.has(nodeId)) return memoWidth.get(nodeId);

    const node = nodes.find(n => n.id === nodeId);
    if (!node.parentsHub) {
        memoWidth.set(nodeId, CARD_W + FAMILY_GAP);
        return CARD_W + FAMILY_GAP;
    }

    const p1Width = calculateWidth(node.parentsHub.p1);
    const p2Width = calculateWidth(node.parentsHub.p2);

    // Total width is the sum of parents' required widths
    const total = p1Width + p2Width;
    memoWidth.set(nodeId, Math.max(total, CARD_W + FAMILY_GAP));
    return memoWidth.get(nodeId);
}

// 3. Recursive Positioning Layout
function positionHubAndParents(hub, x, level) {
    hub.x = x;
    hub.y = (level - 1) * LEVEL_H + 200 + CARD_H / 2;
    hub.branchOffset = ((hubs.indexOf(hub) % 4) - 2) * 15;

    const p1 = nodes.find(n => n.id === hub.p1);
    const p2 = nodes.find(n => n.id === hub.p2);

    const w1 = calculateWidth(p1.id);
    const w2 = calculateWidth(p2.id);

    const p1X = x - w2 / 2;
    const p2X = x + w1 / 2;

    p1.x = p1X - CARD_W / 2;
    p1.y = (level - 1) * LEVEL_H + 200;
    p2.x = p2X - CARD_W / 2;
    p2.y = (level - 1) * LEVEL_H + 200;

    if (p1.parentsHub) positionHubAndParents(p1.parentsHub, p1X, level - 1);
    if (p2.parentsHub) positionHubAndParents(p2.parentsHub, p2X, level - 1);
}

// Start from the core siblings (Level 5)
const rootSiblings = nodes.filter(n => n.level === 5);
if (rootSiblings.length > 0) {
    const totalW = rootSiblings.length * (CARD_W + 50);
    const centerX = width / 2;
    rootSiblings.forEach((s, i) => {
        s.x = centerX - totalW / 2 + i * (CARD_W + 50);
        s.y = 5 * LEVEL_H + 200;
    });
    const rootHub = rootSiblings[0].parentsHub;
    if (rootHub) positionHubAndParents(rootHub, centerX, 5);
}

// Handle other sibling groups
hubs.forEach(h => {
    if (h.x === undefined) return;
    const children = nodes.filter(n => n.parentsHub === h);
    if (children.length > 1) {
        const totalW = children.length * (CARD_W + 50);
        children.forEach((c, i) => {
            c.x = h.x - totalW / 2 + i * (CARD_W + 50);
            c.y = c.level * LEVEL_H + 200;
        });
    }
});

// Safeguard for unpositioned nodes
nodes.forEach(n => {
    if (n.x === undefined) {
        n.x = width / 2;
        n.y = n.level * LEVEL_H + 200;
    }
});

// --- RENDER ---

const linksLayer = gMain.append("g");
data.links.forEach(l => {
    const s = data.nodes.find(n => n.id === (typeof l.source === 'string' ? l.source : l.source.id));
    const t = data.nodes.find(n => n.id === (typeof l.target === 'string' ? l.target : l.target.id));
    if (!s || !t) return;

    let path = "", className = "link-orthogonal";
    if (t.isHub) {
        const sx = s.x + (s.gender === "male" ? CARD_W : 0);
        path = `M ${sx},${s.y + CARD_H / 2} L ${t.x},${t.y}`;
        className = "link-marriage";
    } else if (s.isHub) {
        const midY = (s.y + t.y) / 2 + (s.branchOffset || 0);
        path = `M ${s.x},${s.y} V ${midY} H ${t.x + CARD_W / 2} V ${t.y}`;
    }

    linksLayer.append("path").attr("class", className).attr("d", path);
});

const card = gMain.append("g").selectAll(".card").data(nodes).enter().append("g")
    .attr("class", d => `card ${d.gender}`).attr("transform", d => `translate(${d.x},${d.y})`);

// Static Hit Area (Never moves, prevents jitter)
card.append("rect")
    .attr("width", CARD_W)
    .attr("height", CARD_H)
    .attr("fill", "transparent")
    .style("pointer-events", "all");

const cardInner = card.append("g").attr("class", "card-inner");

cardInner.append("rect").attr("class", "card-bg").attr("width", CARD_W).attr("height", CARD_H);
cardInner.append("text")
    .attr("class", "name")
    .attr("x", CARD_W / 2)
    .attr("y", CARD_H / 2 + 5) // Centered vertically
    .text(d => d.id);

// --- PROFILE MODAL LOGIC ---
const modal = d3.select("#profile-modal");
const modalContent = d3.select(".modal-content");
const modalName = d3.select("#profile-name");
const modalPhoto = d3.select("#profile-photo");
const modalBio = d3.select("#profile-bio");

function normalizeName(name) {
    return name.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[^a-zA-Z0-9 ]/g, "")    // Remove special chars
        .replace(/ /g, "_");             // Spaces to underscores
}

function showProfile(d) {
    const filename = normalizeName(d.id);
    modalName.text(d.id);
    modalPhoto.attr("src", `fotos/${filename}.png`);
    modalBio.text("Cargando información...");

    modal.classed("hidden", false);

    // Add gender specific class for photo border
    modalContent.classed("female-profile", d.gender === "female");

    // Use BIO_DATA if available (bypasses CORS issues)
    if (typeof BIO_DATA !== 'undefined' && BIO_DATA[filename]) {
        const text = BIO_DATA[filename];
        if (text.trim() === "" || text === d.id) {
            modalBio.text(`${d.id}`);
        } else {
            modalBio.text(text);
        }
    } else {
        // Fallback or legacy (if you decide to use a server later)
        modalBio.text(`${d.id}`);
    }
}

function closeModal() {
    modal.classed("hidden", true);
}

d3.select("#close-modal").on("click", closeModal);
d3.select(".modal-overlay").on("click", closeModal);

// Add click listener to cards
card.on("click", function (event, d) {
    event.stopPropagation(); // Prevent zoom/pan from consuming the click
    showProfile(d);
});

// Final Focus
const javier = nodes.find(n => n.id === "Javier Francisco Savid Teixeira");
if (javier) {
    // Zoom out more for mobile devices
    const isMobile = window.innerWidth <= 768;
    const s = isMobile ? 0.35 : 0.6;
    svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2 - javier.x * s, height / 2 - javier.y * s).scale(s));
}

window.addEventListener("resize", () => {
    svg.attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);
});
