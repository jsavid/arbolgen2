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
        { id: "Luis Eduardo Savid", level: 4, gender: "male", side: "paternal", subBranch: "center" },
        { id: "Carmen Beatriz Teixeira", level: 4, gender: "female", side: "maternal", subBranch: "center" },
        { id: "Fenelón Savid", level: 4, gender: "male", side: "paternal", subBranch: "savid" },
        { id: "Juan Cristóbal Teixeira", level: 4, gender: "male", side: "maternal", subBranch: "teixeira" },
        { id: "María Isabel Teixeira", level: 4, gender: "female", side: "maternal", subBranch: "teixeira" },

        // Level 5: Parents & Sibling
        { id: "Javier Francisco Savid Teixeira", level: 5, gender: "male", side: "center", subBranch: "center" },
        { id: "Ayelén Savid Teixeira", level: 5, gender: "female", side: "center", subBranch: "center" },
        { id: "Rayén Savid Teixeira", level: 5, gender: "female", side: "center", subBranch: "center" },

        // Hidden Hubs
        { id: "hub-gs-im", level: 0, invisible: true, side: "paternal", subBranch: "savid" },
        { id: "hub-jc-rc", level: 0, invisible: true, side: "paternal", subBranch: "savid" },
        { id: "hub-rg-am", level: 0, invisible: true, side: "paternal", subBranch: "garcia" },
        { id: "hub-fg-jjz", level: 0, invisible: true, side: "paternal", subBranch: "garcia" },
        { id: "hub-tg-jz", level: 1, invisible: true, side: "paternal", subBranch: "garcia" },
        { id: "hub-dm-rc", level: 1, invisible: true, side: "paternal", subBranch: "savid" },
        { id: "hub-ji-ai", level: 1, invisible: true, side: "maternal", subBranch: "garcia" },
        { id: "hub-at-zf", level: 1, invisible: true, side: "maternal", subBranch: "teixeira" },
        { id: "hub-dg-mp", level: 1, invisible: true, side: "maternal", subBranch: "teixeira" },
        { id: "hub-dg-po", level: 1, invisible: true, side: "maternal", subBranch: "garcia" },
        { id: "hub-lg-cg", level: 2, invisible: true, side: "paternal", subBranch: "savid" },
        { id: "hub-ft-mo", level: 2, invisible: true, side: "paternal", subBranch: "torres" },
        { id: "hub-jt-ib", level: 2, invisible: true, side: "maternal", subBranch: "teixeira" },
        { id: "hub-cg-mi", level: 2, invisible: true, side: "maternal", subBranch: "garcia" },
        { id: "hub-jt-ma", level: 3, invisible: true, side: "paternal", subBranch: "center" },
        { id: "hub-jj-ml", level: 3, invisible: true, side: "maternal", subBranch: "center" },
        { id: "hub-le-cb", level: 4, invisible: true, side: "center", subBranch: "center" }
    ],
    links: [
        { source: "Gregorio Savid Luque", target: "hub-gs-im" },
        { source: "Isabel Mansilla", target: "hub-gs-im" },
        { source: "hub-gs-im", target: "Domingo del Rosario Savid Mansilla" },

        { source: "Javier Carballo", target: "hub-jc-rc" },
        { source: "Rosario Carrilo Albornoz", target: "hub-jc-rc" },
        { source: "hub-jc-rc", target: "Rosario Carballo y Carrillo" },

        { source: "Domingo del Rosario Savid Mansilla", target: "hub-dm-rc" },
        { source: "Rosario Carballo y Carrillo", target: "hub-dm-rc" },
        { source: "hub-dm-rc", target: "José Gregorio Savid Carballo" },

        { source: "Rafael García", target: "hub-rg-am" },
        { source: "Agustina Montaño", target: "hub-rg-am" },
        { source: "hub-rg-am", target: "Tomás García Montaño" },

        { source: "Fernando García", target: "hub-fg-jjz" },
        { source: "Juana Josefa Zavalía", target: "hub-fg-jjz" },
        { source: "hub-fg-jjz", target: "Juana de Zavalía y García" },

        { source: "Tomás García Montaño", target: "hub-tg-jz" },
        { source: "Juana de Zavalía y García", target: "hub-tg-jz" },
        { source: "hub-tg-jz", target: "Carmen García Zavalla" },

        { source: "Juan Irusta", target: "hub-ji-ai" },
        { source: "Adela Irusta", target: "hub-ji-ai" },
        { source: "hub-ji-ai", target: "María Fredebinda Irusta" },

        { source: "Antonio Teixeira", target: "hub-at-zf" },
        { source: "Zeferina Freitas", target: "hub-at-zf" },
        { source: "hub-at-zf", target: "João Teixeira" },

        { source: "Dolores Gudiño", target: "hub-dg-mp" },
        { source: "María Pucheta", target: "hub-dg-mp" },
        { source: "hub-dg-mp", target: "Isabel Estaurofila Gudiño" },

        { source: "Domingo García de Rosas", target: "hub-dg-po" },
        { source: "Patricia O'Connor", target: "hub-dg-po" },
        { source: "hub-dg-po", target: "Cristóbal García" },

        { source: "José Gregorio Savid Carballo", target: "hub-lg-cg" },
        { source: "Carmen García Zavalla", target: "hub-lg-cg" },
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
const getStaticY = (level) => level * 350 + 150; // Increased to 350 for more vertical air
const getTargetX = (d) => {
    const subBranch = d.subBranch;
    const side = d.side;

    if (side === "paternal") {
        if (subBranch === "savid") return width * 0.10;
        if (subBranch === "torres") return width * 0.25;
        if (subBranch === "garcia") return width * 0.40;
    }

    if (side === "maternal") {
        if (subBranch === "garcia") return width * 0.60;
        if (subBranch === "teixeira") return width * 0.75;
    }

    return width * 0.5;
};

// Initial Setup: Deterministic placement based on branch
data.nodes.forEach(d => {
    d.y = d.level * 400 + 100; // Increased spacing to 400
    d.x = getTargetX(d);
});

const simulation = d3.forceSimulation(data.nodes)
    .alphaDecay(0.01)
    .velocityDecay(0.6)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(d => {
        const level = d.source.level;
        if (d.target.invisible) return 30 + level * 20;
        return 200;
    }).strength(0.3))
    .force("charge", d3.forceManyBody().strength(-1200).distanceMax(2000))
    .force("y", d3.forceY(d => d.level * 400 + 100).strength(40)) // Uniformly strong Y anchor
    .force("x", d3.forceX(d => getTargetX(d)).strength(1.2))
    .force("collide", d3.forceCollide().radius(d => d.invisible ? 40 : 90).strength(1));

// Remove forceCenter if it conflicts with rigid levels in large trees
simulation.force("center", null);

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
        .on("start", (e, d) => {
            if (!e.active) simulation.alphaTarget(0.2).restart();
            // Absolute pinning on click: use mouse coordinates
            d.fx = e.x;
            d.fy = e.y;
        })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));

node.filter(d => !d.invisible).append("circle")
    .attr("r", 55) // Smaller for better alignment
    .attr("fill", d => d.gender === "male" ? "url(#male-grad)" : "url(#female-grad)")
    .attr("filter", "drop-shadow(0 10px 15px rgba(0,0,0,0.4))");

node.filter(d => !d.invisible).append("text")
    .style("font-size", "12px")
    .style("font-weight", "600")
    .selectAll("tspan").data(d => d.id.split(" ")).join("tspan")
    .attr("x", 0)
    .attr("dy", (d, i, ns) => {
        // Center the entire block vertically
        const totalLines = ns.length;
        const lineHeight = 1.1; // em
        if (i === 0) {
            // First line offset: move up by half of total height, 
            // but add a small constant (0.3em) to account for font baseline
            return (-(totalLines - 1) * lineHeight / 2 + 0.3) + "em";
        }
        return lineHeight + "em";
    })
    .text(d => d);

simulation.on("tick", () => {
    // Hub logic: Midpoint of parents on X, but STRICT level-between on Y
    const hubs = [
        { p1: "Gregorio Savid Luque", p2: "Isabel Mansilla", h: "hub-gs-im" },
        { p1: "Javier Carballo", p2: "Rosario Carrilo Albornoz", h: "hub-jc-rc" },
        { p1: "Rafael García", p2: "Agustina Montaño", h: "hub-rg-am" },
        { p1: "Fernando García", p2: "Juana Josefa Zavalía", h: "hub-fg-jjz" },
        { p1: "Domingo del Rosario Savid Mansilla", p2: "Rosario Carballo y Carrillo", h: "hub-dm-rc" },
        { p1: "Tomás García Montaño", p2: "Juana de Zavalía y García", h: "hub-tg-jz" },
        { p1: "Juan Irusta", p2: "Adela Irusta", h: "hub-ji-ai" },
        { p1: "Antonio Teixeira", p2: "Zeferina Freitas", h: "hub-at-zf" },
        { p1: "Dolores Gudiño", p2: "María Pucheta", h: "hub-dg-mp" },
        { p1: "Domingo García de Rosas", p2: "Patricia O'Connor", h: "hub-dg-po" },
        { p1: "José Gregorio Savid Carballo", p2: "Carmen García Zavalla", h: "hub-lg-cg" },
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
        let x1 = d.source.x, y1 = d.source.y, x2 = d.target.x, y2 = d.target.y;
        const r = 55; // Updated radius

        // Distance and direction
        const dx = x2 - x1, dy = y2 - y1;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) return `M ${x1},${y1} L ${x2},${y2}`;

        // Unit vector
        const ux = dx / dist, uy = dy / dist;

        // Clip source if it's a visible node
        if (!d.source.invisible) {
            x1 += ux * r;
            y1 += uy * r;
        }
        // Clip target if it's a visible node
        if (!d.target.invisible) {
            x2 -= ux * r;
            y2 -= uy * r;
        }

        return `M ${x1},${y1} L ${x2},${y2}`;
    });

    node.attr("transform", d => `translate(${d.x},${d.y})`);
});

window.addEventListener("resize", () => {
    const w = window.innerWidth, h = window.innerHeight;
    svg.attr("viewBox", [0, 0, w, h]);
    simulation.force("center", d3.forceCenter(w / 2, h / 2)).alpha(0.3).restart();
});
