const students = [
    {
        "id": "SV01",
        "name": "Nguyễn Văn An",
        "major": "CNTT",
        "score": 8.5
    },
    {
        "id": "SV02",
        "name": "Trần Thị Bình",
        "major": "Marketing",
        "score": 7.5
    },
    {
        "id": "SV03",
        "name": "Lê Văn Cường",
        "major": "CNTT",
        "score": 9
    },
    {
        "id": "SV04",
        "name": "Phạm Thị Dung",
        "major": "Kế toán",
        "score": 6.8
    },
    {
        "id": "SV05",
        "name": "Hoàng Minh Đức",
        "major": "CNTT",
        "score": 7.2
    },
    {
        "id": "SV06",
        "name": "Vũ Thị Hà",
        "major": "Ngôn ngữ Anh",
        "score": 8.8
    },
    {
        "id": "SV07",
        "name": "Đặng Quốc Huy",
        "major": "Quản trị kinh doanh",
        "score": 5.9
    },
    {
        "id": "SV08",
        "name": "Bùi Thị Lan",
        "major": "Marketing",
        "score": 8.0
    },
    {
        "id": "SV09",
        "name": "Ngô Thanh Nam",
        "major": "CNTT",
        "score": 6.5
    },
    {
        "id": "SV10",
        "name": "Đỗ Thị Oanh",
        "major": "Kế toán",
        "score": 9.2
    },
    {
        "id": "SV11",
        "name": "Dương Văn Phúc",
        "major": "Quản trị kinh doanh",
        "score": 7.8
    },
    {
        "id": "SV12",
        "name": "Lý Thu Quỳnh",
        "major": "Ngôn ngữ Anh",
        "score": 8.3
    }
];

const products = [
    {
        "id": 1,
        "name": "VinFast VF 3",
        "brand": "VinFast",
        "price": 299000000,
        "category": "SUV"
    },
    {
        "id": 2,
        "name": "Tesla Model 3",
        "brand": "Tesla",
        "price": 1099000000,
        "category": "Sedan"
    },
    {
        "id": 3,
        "name": "BYD Seal",
        "brand": "BYD",
        "price": 1119000000,
        "category": "Sedan"
    },
    {
        "id": 4,
        "name": "VinFast VF 5 Plus",
        "brand": "VinFast",
        "price": 529000000,
        "category": "SUV"
    },
    {
        "id": 5,
        "name": "VinFast VF 8",
        "brand": "VinFast",
        "price": 1019000000,
        "category": "SUV"
    },
    {
        "id": 6,
        "name": "VinFast VF 9",
        "brand": "VinFast",
        "price": 1491000000,
        "category": "SUV"
    },
    {
        "id": 7,
        "name": "Toyota Vios",
        "brand": "Toyota",
        "price": 458000000,
        "category": "Sedan"
    },
    {
        "id": 8,
        "name": "Toyota Camry",
        "brand": "Toyota",
        "price": 1220000000,
        "category": "Sedan"
    },
    {
        "id": 9,
        "name": "Honda CR-V",
        "brand": "Honda",
        "price": 1029000000,
        "category": "SUV"
    },
    {
        "id": 10,
        "name": "Mazda CX-5",
        "brand": "Mazda",
        "price": 749000000,
        "category": "SUV"
    },
    {
        "id": 11,
        "name": "Hyundai Accent",
        "brand": "Hyundai",
        "price": 426000000,
        "category": "Sedan"
    },
    {
        "id": 12,
        "name": "Kia Carnival",
        "brand": "Kia",
        "price": 1199000000,
        "category": "MPV"
    },
    {
        "id": 13,
        "name": "Ford Ranger",
        "brand": "Ford",
        "price": 669000000,
        "category": "Bán tải"
    },
    {
        "id": 14,
        "name": "Tesla Model Y",
        "brand": "Tesla",
        "price": 1499000000,
        "category": "SUV"
    }
];

const jsonStudents = `[
    {
        "id": "SV001",
        "name": "Nguyễn Văn An",
        "age": 20,
        "major": "CNTT",
        "score": 8.5
    },
    {
        "id": "SV002",
        "name": "Trần Thị Bình",
        "age": 19,
        "major": "Marketing",
        "score": 7.5
    },
    {
        "id": "SV003",
        "name": "Lê Văn Cường",
        "age": 20,
        "major": "CNTT",
        "score": 9
    },
    {
        "id": "SV004",
        "name": "Phạm Thị Dung",
        "age": 21,
        "major": "Kế toán",
        "score": 6.8
    },
    {
        "id": "SV005",
        "name": "Hoàng Minh Đức",
        "age": 22,
        "major": "CNTT",
        "score": 7.2
    },
    {
        "id": "SV006",
        "name": "Vũ Thị Hà",
        "age": 18,
        "major": "Ngôn ngữ Anh",
        "score": 8.8
    },
    {
        "id": "SV007",
        "name": "Đặng Quốc Huy",
        "age": 19,
        "major": "Quản trị kinh doanh",
        "score": 5.9
    },
    {
        "id": "SV008",
        "name": "Bùi Thị Lan",
        "age": 20,
        "major": "Marketing",
        "score": 8.0
    },
    {
        "id": "SV009",
        "name": "Ngô Thanh Nam",
        "age": 21,
        "major": "CNTT",
        "score": 6.5
    },
    {
        "id": "SV010",
        "name": "Đỗ Thị Oanh",
        "age": 22,
        "major": "Kế toán",
        "score": 9.2
    }
]`;

/* ================= TIỆN ÍCH ================= */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = (n) => n.toLocaleString("vi-VN") + " ₫";

function table(rows, cols) {
    if (!rows.length) return '<p class="empty">Không có kết quả.</p>';
    const head = cols.map((c) => `<th>${c.label}</th>`).join("");
    const body = rows.map((r) => `<tr>${cols.map((c) => `<td>${esc(c.get ? c.get(r) : r[c.key])}</td>`).join("")}</tr>`).join("");
    return `<div class="tw"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}
const studentCols = [
    { label: "Mã SV", key: "id" }, { label: "Họ tên", key: "name" },
    { label: "Ngành", key: "major" }, { label: "Điểm", key: "score" },
];
const productCols = [
    { label: "ID", key: "id" }, { label: "Tên xe", key: "name" }, { label: "Thương hiệu", key: "brand" },
    { label: "Loại xe", key: "category" }, { label: "Giá", get: (p) => money(p.price) },
];
const show = (id, title, html) => ($(id).innerHTML = `<h3>${title}</h3>${html}`);

/* ================= TAB ================= */
document.querySelectorAll("nav button").forEach((btn) =>
    btn.addEventListener("click", () => {
        document.querySelectorAll("nav button").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll("section").forEach((s) => s.classList.remove("active"));
        btn.classList.add("active");
        $(btn.dataset.tab).classList.add("active");
    })
);

/* ================= BÀI 10 — SINH VIÊN ================= */
const b10 = {
    list() { // 1. Hiển thị danh sách
        show("r10", `Danh sách ${students.length} sinh viên`, table(students, studentCols));
    },
    findById() { // 2. Tìm theo id
        const id = $("b10-id").value.trim().toUpperCase();
        const sv = students.find((s) => s.id === id);
        show("r10", `Tìm sinh viên có id = ${esc(id)}`, sv ? table([sv], studentCols) : '<p class="empty">Không tìm thấy sinh viên.</p>');
    },
    byMajor() { // 3. Lọc theo ngành
        const m = $("b10-major").value;
        const rs = students.filter((s) => s.major === m);
        show("r10", `Sinh viên ngành ${esc(m)} (${rs.length})`, table(rs, studentCols));
    },
    byScore() { // 4. Lọc điểm >= x
        const min = Number($("b10-score").value);
        const rs = students.filter((s) => s.score >= min);
        show("r10", `Sinh viên có điểm ≥ ${min} (${rs.length})`, table(rs, studentCols));
    },
    average() { // 5. Điểm trung bình
        const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
        show("r10", "Điểm trung bình", `<p class="stat">Tổng ${students.length} sinh viên → <b>${avg.toFixed(2)}</b></p>`);
    },
    top() { // 6. Điểm cao nhất (có thể nhiều người bằng điểm)
        const max = Math.max(...students.map((s) => s.score));
        const rs = students.filter((s) => s.score === max);
        show("r10", `Sinh viên điểm cao nhất (${max})`, table(rs, studentCols));
    },
    sortDesc() { // 7. Sắp xếp giảm dần (copy mảng để không làm đổi mảng gốc)
        const rs = [...students].sort((a, b) => b.score - a.score);
        show("r10", "Sắp xếp điểm giảm dần", table(rs, [{ label: "Hạng", get: (s) => rs.indexOf(s) + 1 }, ...studentCols]));
    },
};
[...new Set(students.map((s) => s.major))].forEach((m) => $("b10-major").add(new Option(m, m)));
$("b10-major").value = "CNTT";
$("b10-list").onclick = b10.list; $("b10-find").onclick = b10.findById; $("b10-filter-major").onclick = b10.byMajor;
$("b10-filter-score").onclick = b10.byScore; $("b10-avg").onclick = b10.average; $("b10-top").onclick = b10.top; $("b10-sort").onclick = b10.sortDesc;
b10.list();

/* ================= BÀI 11 — SẢN PHẨM ================= */
const b11 = {
    searchName() { // Tìm theo tên (không phân biệt hoa thường)
        const k = $("b11-name").value.trim().toLowerCase();
        const rs = products.filter((p) => p.name.toLowerCase().includes(k));
        show("r11", `Tìm theo tên "${esc(k)}" (${rs.length})`, table(rs, productCols));
    },
    byBrand() {
        const v = $("b11-brand").value;
        const rs = products.filter((p) => p.brand === v);
        show("r11", `Thương hiệu ${esc(v)} (${rs.length})`, table(rs, productCols));
    },
    byCategory() {
        const v = $("b11-cat").value;
        const rs = products.filter((p) => p.category === v);
        show("r11", `Loại xe ${esc(v)} (${rs.length})`, table(rs, productCols));
    },
    byPrice() {
        const min = Number($("b11-min").value) * 1e6 || 0;
        const max = Number($("b11-max").value) * 1e6 || Infinity;
        const rs = products.filter((p) => p.price >= min && p.price <= max);
        show("r11", `Giá từ ${money(min)} đến ${max === Infinity ? "không giới hạn" : money(max)} (${rs.length})`, table(rs, productCols));
    },
    sortAsc() { show("r11", "Giá tăng dần", table([...products].sort((a, b) => a.price - b.price), productCols)); },
    sortDesc() { show("r11", "Giá giảm dần", table([...products].sort((a, b) => b.price - a.price), productCols)); },
    cheapest() {
        const p = products.reduce((m, x) => (x.price < m.price ? x : m));
        show("r11", "Sản phẩm rẻ nhất", table([p], productCols));
    },
    priciest() {
        const p = products.reduce((m, x) => (x.price > m.price ? x : m));
        show("r11", "Sản phẩm đắt nhất", table([p], productCols));
    },
    all() { show("r11", `Tất cả ${products.length} sản phẩm`, table(products, productCols)); },
};
[...new Set(products.map((p) => p.brand))].forEach((b) => $("b11-brand").add(new Option(b, b)));
[...new Set(products.map((p) => p.category))].forEach((c) => $("b11-cat").add(new Option(c, c)));
$("b11-all").onclick = b11.all; $("b11-search").onclick = b11.searchName; $("b11-name").oninput = b11.searchName;
$("b11-brand").onchange = b11.byBrand; $("b11-cat").onchange = b11.byCategory; $("b11-price").onclick = b11.byPrice;
$("b11-asc").onclick = b11.sortAsc; $("b11-desc").onclick = b11.sortDesc; $("b11-cheap").onclick = b11.cheapest; $("b11-pricey").onclick = b11.priciest;
b11.all();

/* ================= BÀI 12 — JSON CƠ BẢN ================= */
const jsonStudent = `{
    "id": "SV001",
    "name": "Nguyễn Văn An",
    "age": 20,
    "major": "CNTT",
    "score": 8.5
}`;
let studentObj = JSON.parse(jsonStudent); // JSON → Object

function renderB12() {
    $("r12").innerHTML = `
      <h3>1. JSON → Object (JSON.parse)</h3><pre>${esc(JSON.stringify(studentObj))}</pre>
      <h3>2. Hiển thị name</h3><pre>${esc(studentObj.name)}</pre>
      <h3>3. Hiển thị major</h3><pre>${esc(studentObj.major)}</pre>
      <h3>4. Điểm hiện tại (đổi bằng ô nhập phía trên)</h3><pre>score = ${studentObj.score}</pre>
      <h3>5. Object → JSON (JSON.stringify)</h3><pre>${esc(JSON.stringify(studentObj, null, 4))}</pre>`;
}
$("b12-change").onclick = () => {
    const v = Number($("b12-score").value);
    if (Number.isNaN(v) || v < 0 || v > 10) return alert("Điểm phải từ 0 đến 10");
    studentObj.score = v;
    renderB12();
};
$("b12-reset").onclick = () => { studentObj = JSON.parse(jsonStudent); renderB12(); };
renderB12();

// Mở rộng: mảng JSON gồm 10 sinh viên
const studentList = JSON.parse(jsonStudents);
const avg12 = studentList.reduce((s, x) => s + x.score, 0) / studentList.length;
$("r12b").innerHTML = `
  <h3>Chuỗi JSON gốc (10 sinh viên)</h3><pre>${esc(jsonStudents)}</pre>
  <h3>Sau JSON.parse() → mảng ${studentList.length} object</h3>
  ${table(studentList, [{ label: "ID", key: "id" }, { label: "Họ tên", key: "name" }, { label: "Tuổi", key: "age" }, { label: "Ngành", key: "major" }, { label: "Điểm", key: "score" }])}
  <p class="stat">Điểm trung bình: <b>${avg12.toFixed(2)}</b></p>`;

/* ================= BÀI 13 — fetch("products.json") ================= */
async function loadProducts() {
    let data, source;
    try {
        const res = await fetch("products.json");
        if (!res.ok) throw new Error("HTTP " + res.status);
        data = await res.json();
        source = '<span class="badge">Đọc từ products.json bằng fetch()</span>';
    } catch (err) {
        // Mở trực tiếp file:// hoặc không có file → dùng dữ liệu dự phòng
        data = products;
        source = '<span class="badge warn">fetch() không chạy được (file://) – dùng dữ liệu dự phòng. Hãy mở bằng Live Server.</span>';
    }
    $("r13").innerHTML = `${source}<p class="sub" style="margin-top:8px">${data.length} sản phẩm</p>
      <div class="grid">${data.map((p) => `
        <div class="item"><div class="nm">${esc(p.name)}</div>
        <div class="br">${esc(p.brand)} · <span class="tag">${esc(p.category || "—")}</span></div>
        <div class="pr">${money(p.price)}</div></div>`).join("")}</div>`;
}
loadProducts();
