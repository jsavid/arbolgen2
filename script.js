const data = {
    nodes: [
        // Level 0: Great-Great-Grandparents
        { id: "Juan Irusta", level: 0, gender: "male", side: "maternal", subBranch: "garcia" },
        { id: "Adela Irusta", level: 0, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 1: Great-Grandparents
        { id: "Jose Gregorio Savid", level: 1, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Carmen García", level: 1, gender: "female", side: "paternal", subBranch: "savid" },
        { id: "Fenelón V. Torres", level: 1, gender: "male", side: "paternal", subBranch: "torres" },
        { id: "María A. Omil", level: 1, gender: "female", side: "paternal", subBranch: "torres" },
        { id: "João Teixeira", level: 1, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "Isabel Estaurofila Gudiño", level: 1, gender: "female", side: "maternal", subBranch: "teixeira" },
        { id: "Cristóbal García", level: 1, gender: "male", side: "maternal", subBranch: "garcia" },
        { id: "María Fredebinda Irusta", level: 1, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 2: Grandparents
        { id: "Jose Tomás Savid García", level: 2, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Maria Ángela Torres", level: 2, gender: "female", side: "paternal", subBranch: "torres" },
        { id: "Juan Jesús Teixeira", level: 2, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Luisa García", level: 2, gender: "female", side: "maternal", subBranch: "garcia" },

        // Level 3: Parents & Sibling
        { id: "Luis Eduardo Savid", level: 3, gender: "male", side: "paternal", subBranch: "center" },
        { id: "Carmen Beatriz Teixeira", level: 3, gender: "female", side: "maternal", subBranch: "center" },
        { id: "Fenelón Savid", level: 3, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Juan Cristóbal Teixeira", level: 3, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Isabel Teixeira", level: 3, gender: "female", side: "maternal", subBranch: "teixeira" },

        // Level 4: Children
        { id: "Javier Francisco Savid Teixeira", level: 4, gender: "male", side: "center", subBranch: "center" },
        { id: "Ayelén Savid Teixeira", level: 4, gender: "female", side: "center", subBranch: "center" },
        { id: "Rayén Savid Teixeira", level: 4, gender: "female", side: "center", subBranch: "center" },

        // Hidden Hubs
        { id: "hub-ji-ai", level: 0, invisible: true, side: "maternal", subBranch: "garcia" },
        { id: "hub-lg-cg", level: 1, invisible: true, side: "paternal", subBranch: "savid" },
        { id: "hub-ft-mo", level: 1, invisible: true, side: "paternal", subBranch: "torres" },
        { id: "hub-jt-ib", level: 1, invisible: true, side: "maternal", subBranch: "teixeira" },
        { id: "hub-cg-mi", level: 1, invisible: true, side: "maternal", subBranch: "garcia" },
        { id: "hub-jt-ma", level: 2, invisible: true, side: "paternal", subBranch: "center" },
        { id: "hub-jj-ml", level: 2, invisible: true, side: "maternal", subBranch: "center" },
        { id: "hub-le-cb", level: 3, invisible: true, side: "center", subBranch: "center" }
    ],
    links: [
        { source: "Juan Irusta", target: "hub-ji-ai" },
        { source: "Adela Irusta", target: "hub-ji-ai" },
        { source: "hub-ji-ai", target: "María Fredebinda Irusta" },

        { source: "Jose Gregorio Savid", target: "hub-lg-cg" },
        { source: "Carmen García", target: "hub-lg-cg" },
        { source: "hub-lg-cg", target: "Jose Tomás Savid García" },
        { source: "Fenelón V. Torres", target: "hub-ft-mo" },
        { source: "María A. Omil", target: "hub-ft-mo" },
        { source: "hub-ft-mo", target: "Maria Ángela Torres" },
        { source: "João Teixeira", target: "hub-jt-ib" },
        { source: "Isabel Estaurofila Gudiño", target: "hub-jt-ib" },
        { source: "hub-jt-ib", target: "Juan Jesús Teixeira" },
        { source: "Cristóbal García", target: "hub-cg-mi" },
        { source: "María Fredebinda Irusta", target: "hub-cg-mi" },
        { source: "hub-cg-mi", target: "María Luisa García" },
        { source: "Jose Tomás Savid García", target: "hub-jt-ma" },
        { source: "Maria Ángela Torres", target: "hub-jt-ma" },
        { source: "hub-jt-ma", target: "Luis Eduardo Savid" },
        { source: "hub-jt-ma", target: "Fenelón Savid" },
        { source: "Juan Jesús Teixeira", target: "hub-jj-ml" },
        { source: "María Luisa García", target: "hub-jj-ml" },
        { source: "hub-jj-ml", target: "Carmen Beatriz Teixeira" },
        { source: "hub-jj-ml", target: "Juan Cristóbal Teixeira" },
        { source: "hub-jj-ml", target: "María Isabel Teixeira" },
        { source: "Luis Eduardo Savid", target: "hub-le-cb" },
        { source: "Carmen Beatriz Teixeira", target: "hub-le-cb" },
        { source: "hub-le-cb", target: "Javier Francisco Savid Teixeira" },
        { source: "hub-le-cb", target: "Ayelén Savid Teixeira" },
        { source: "hub-le-cb", target: "Rayén Savid Teixeira" }
    ]
};

const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select("#genealogy-tree").attr("viewBox", [0, 0, width, height]);
const containerG = svg.append("g");

svg.call(d3.zoom().scaleExtent([0.1, 5]).on("zoom", (e) => containerG.attr("transform", e.transform)));

const defs = svg.append("defs");
const createGrad = (id, c1, c2) => {
    const g = defs.append("linearGradient").attr("id", id).attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "100%");
    g.append("stop").attr("offset", "0%").attr("stop-color", c1);
    g.append("stop").attr("offset", "100%").attr("stop-color", c2);
};
createGrad("male-grad", "#1e40af", "#1e3a8a");
createGrad("female-grad", "#be185d", "#9d174d");

// RIGID SPATIAL LOGIC
const getStaticY = (level) => level * 280 + 150;
const getTargetX = (d) => {
    // Extreme horizontal separation to prevent cross-level interference
    const subBranch = d.subBranch;
    if (subBranch === "savid") return width * 0.05;
    if (subBranch === "torres") return width * 0.35;
    if (subBranch === "teixeira") return width * 0.65;
    if (subBranch === "garcia") return width * 0.95;
    return width * 0.5;
};

// Initial Setup: Unlock Y for movement but start them perfectly leveled
data.nodes.forEach(d => {
    d.y = d.level * 280 + 150;
    d.x = getTargetX(d) + (Math.random() - 0.5) * 100;
});

const simulation = d3.forceSimulation(data.nodes)
    .alphaDecay(0.01)
    .velocityDecay(0.5)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(120).strength(0.1))
    .force("charge", d3.forceManyBody().strength(-3000).distanceMax(2000)) // Softer repulsion
    .force("center", d3.forceCenter(width / 2, height * 0.45))
    .force("y", d3.forceY(d => d.level * 280 + 150).strength(15)) // EXTREME LEVEL LOCK
    .force("x", d3.forceX(d => getTargetX(d)).strength(1.2))
    .force("collide", d3.forceCollide().radius(140).strength(1));

// Analog Breathing (Gentle)
d3.timer((elapsed) => {
    data.nodes.forEach(d => {
        if (!d.fx) {
            d.vx += Math.sin(elapsed * 0.001 + d.index) * 0.04;
            d.vy += Math.cos(elapsed * 0.0008 + d.index) * 0.1;
        }
    });
    simulation.alpha(Math.max(simulation.alpha(), 0.01)).restart();
});

const link = containerG.append("g").selectAll("path").data(data.links).join("path").attr("class", "link");

const node = containerG.append("g").selectAll("g").data(data.nodes).join("g")
    .attr("class", d => d.invisible ? "node-invisible" : "node")
    .call(d3.drag()
        .on("start", (e, d) => { if (!e.active) simulation.alphaTarget(0.2).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));

node.filter(d => !d.invisible).append("circle")
    .attr("r", 70)
    .attr("fill", d => d.gender === "male" ? "url(#male-grad)" : "url(#female-grad)")
    .attr("filter", "drop-shadow(0 10px 15px rgba(0,0,0,0.4))");

node.filter(d => !d.invisible).append("text")
    .selectAll("tspan").data(d => {
        const parts = d.id.split(" ");
        if (parts.length > 3) return [parts.slice(0, 2).join(" "), parts.slice(2).join(" ")];
        return parts;
    }).join("tspan")
    .attr("x", 0)
    .attr("dy", (d, i, ns) => i === 0 ? (-(ns.length - 1) * 0.6 + 0.3) + "em" : "1.2em")
    .text(d => d);

simulation.on("tick", () => {
    // Hub logic: Midpoint of parents on X, but STRICT level-between on Y
    const hubs = [
        { p1: "Juan Irusta", p2: "Adela Irusta", h: "hub-ji-ai" },
        { p1: "Jose Gregorio Savid", p2: "Carmen García", h: "hub-lg-cg" },
        { p1: "Fenelón V. Torres", p2: "María A. Omil", h: "hub-ft-mo" },
        { p1: "João Teixeira", p2: "Isabel Estaurofila Gudiño", h: "hub-jt-ib" },
        { p1: "Cristóbal García", p2: "María Fredebinda Irusta", h: "hub-cg-mi" },
        { p1: "Jose Tomás Savid García", p2: "Maria Ángela Torres", h: "hub-jt-ma" },
        { p1: "Juan Jesús Teixeira", p2: "María Luisa García", h: "hub-jj-ml" },
        { p1: "Luis Eduardo Savid", p2: "Carmen Beatriz Teixeira", h: "hub-le-cb" }
    ];
    hubs.forEach(c => {
        const p1 = data.nodes.find(n => n.id === c.p1), p2 = data.nodes.find(n => n.id === c.p2), h = data.nodes.find(n => n.id === c.h);
        if (p1 && p2 && h) {
            h.x = (p1.x + p2.x) / 2;
            // Hub Y strictly pulled to parent level average (which should be identical anyway)
            h.y = (p1.y + p2.y) / 2;
        }
    });

    link.attr("d", d => {
        const x1 = d.source.x, y1 = d.source.y, x2 = d.target.x, y2 = d.target.y;

        // Parent to Hub (Marriage) or Hub to Child (Descendant)
        // Everything is a straight line, but marriage is horizontal due to forceY
        return `M ${x1},${y1} L ${x2},${y2}`;
    });

    node.attr("transform", d => `translate(${d.x},${d.y})`);
});

window.addEventListener("resize", () => {
    const w = window.innerWidth, h = window.innerHeight;
    svg.attr("viewBox", [0, 0, w, h]);
    simulation.force("center", d3.forceCenter(w / 2, h / 2)).alpha(0.3).restart();
});
