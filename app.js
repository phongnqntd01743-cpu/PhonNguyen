const products=[
{id:1,name:"Zinger Burger",price:59000,cat:"Burger",badge:"Bán chạy",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=82"},
{id:2,name:"Gà Rán Truyền Thống 6 Miếng",price:129000,cat:"Gà rán",badge:"Bán chạy",img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=82"},
{id:3,name:"Burger Zinger Cay Deluxe",price:89000,cat:"Burger",badge:"Cay",img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=82"},
{id:4,name:"Cơm Gà Sốt Cay",price:49000,cat:"Cơm",badge:"Mới",img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=82"},
{id:5,name:"Pepsi (Ly)",price:19000,cat:"Đồ uống",badge:"",img:"https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=700&q=82"},
{id:6,name:"Khoai Tây Chiên",price:29000,cat:"Khoai tây",badge:"Bán chạy",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=82"},
{id:7,name:"Burger Tôm",price:49000,cat:"Burger",badge:"Mới",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=82"},
{id:8,name:"Gà Rán Cay Giòn",price:39000,cat:"Gà rán",badge:"",img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=82"}
];
const combos=[
{id:101,name:"Combo Burger Tiết Kiệm",price:79000,cat:"Combo",badge:"Tiết kiệm",img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=82"},
{id:102,name:"Combo Gà Vui Vẻ",price:99000,cat:"Combo",badge:"Bán chạy",img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=82"},
{id:103,name:"Combo Cơm Gà Couple",price:139000,cat:"Combo",badge:"Combo",img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=82"},
{id:104,name:"Combo Gia Đình 1+4",price:249000,cat:"Combo",badge:"Mới",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=82"}
];
let cart=JSON.parse(localStorage.getItem("kfc_cart")||"[]");
let orders=JSON.parse(localStorage.getItem("kfc_orders")||'[{"id":"HD002","date":"15/09/2026","total":99000,"status":"Đang giao"},{"id":"HD001","date":"14/09/2026","total":128000,"status":"Đã giao"}]');
const money=n=>n.toLocaleString("vi-VN")+"đ";
function go(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");scrollTo(0,0);if(id==="orders")renderOrders();if(id==="admin")renderAdmin();document.querySelectorAll(".main-nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===id))}
function productCard(p){return `<article class="product-card"><div class="product-image" style="background-image:url('${p.img}')">${p.badge?`<span class="badge">${p.badge}</span>`:""}<button class="heart" onclick="showToast('Đã thêm vào danh sách yêu thích')">♡</button></div><div class="product-body"><h3 title="${p.name}">${p.name}</h3><div class="price">${money(p.price)}</div><div class="product-actions"><button class="add-btn" onclick="add(${p.id})">🛒 &nbsp;Thêm vào giỏ</button></div></div></article>`}
function renderFeatured(){document.getElementById("featured").innerHTML=products.slice(0,6).map(productCard).join("")}
function renderMenu(){let q=(document.getElementById("q")?.value||"").toLowerCase(),c=document.getElementById("cat")?.value||"",s=document.getElementById("sort")?.value||"";let a=products.filter(p=>p.name.toLowerCase().includes(q)&&(!c||p.cat===c));if(s==="low")a.sort((x,y)=>x.price-y.price);if(s==="high")a.sort((x,y)=>y.price-x.price);document.getElementById("menuGrid").innerHTML=a.length?a.map(productCard).join(""):"<div style='grid-column:1/-1;padding:35px;text-align:center;color:#777'>Không có món phù hợp.</div>"}
function renderCombos(){document.getElementById("comboGrid").innerHTML=combos.map(productCard).join("")}
function filterCat(c){go("menu");document.getElementById("cat").value=c==="Khoai tây"?"Khoai tây":c;renderMenu()}
function clearCategory(){go("menu");clearFilters()}
function clearFilters(){document.getElementById("q").value="";document.getElementById("cat").value="";document.getElementById("sort").value="";renderMenu()}
function add(id){let p=[...products,...combos].find(x=>x.id===id),i=cart.find(x=>x.id===id);i?i.qty++:cart.push({...p,qty:1});save();openCart();showToast("Đã thêm món vào giỏ")}
function save(){localStorage.setItem("kfc_cart",JSON.stringify(cart));renderCart()}
function renderCart(){document.getElementById("count").textContent=cart.reduce((s,x)=>s+x.qty,0);document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><div class="cart-img" style="background-image:url('${x.img}')"></div><div><b>${x.name}</b><small>${money(x.price)}</small><div class="qty"><button onclick="qty(${x.id},-1)">−</button> ${x.qty} <button onclick="qty(${x.id},1)">+</button></div></div><button class="cart-remove" onclick="del(${x.id})">×</button></div>`).join(""):"<div style='padding:30px 0;text-align:center;color:#7b8592'>Giỏ hàng đang trống.</div>";document.getElementById("subtotal").textContent=money(cart.reduce((s,x)=>s+x.price*x.qty,0))}
function qty(id,n){let i=cart.find(x=>x.id===id);if(!i)return;i.qty+=n;if(i.qty<=0)cart=cart.filter(x=>x.id!==id);save()}
function del(id){cart=cart.filter(x=>x.id!==id);save()}
function openCart(){closeModals();document.getElementById("cart").classList.add("on");document.getElementById("shade").classList.add("on");renderCart()}
function openModal(id){closeAll();document.getElementById(id).classList.add("on");document.getElementById("shade").classList.add("on")}
function closeModals(){document.querySelectorAll(".modal").forEach(x=>x.classList.remove("on"));document.getElementById("cart").classList.remove("on")}
function closeAll(){closeModals();document.getElementById("shade").classList.remove("on")}
function login(){let e=document.getElementById("email").value,p=document.getElementById("pass").value;if(e==="admin@demo.vn"&&p==="admin123"){closeAll();go("admin");showToast("Đăng nhập Admin thành công")}else if(e==="customer@demo.vn"&&p==="123456"){closeAll();go("orders");showToast("Đăng nhập Customer thành công")}else showToast("Demo: customer@demo.vn / 123456")}
function register(){showToast("Form đăng ký gồm: Họ tên, Email, SĐT, Ngày sinh, Địa chỉ, Giới tính, Mật khẩu và xác nhận mật khẩu")}
function checkout(){if(!cart.length)return showToast("Giỏ hàng đang trống");openModal("checkout")}
function place(){let total=cart.reduce((s,x)=>s+x.price*x.qty,0);orders.unshift({id:"HD"+String(orders.length+3).padStart(3,"0"),date:new Date().toLocaleDateString("vi-VN"),total,status:"Chưa giao"});localStorage.setItem("kfc_orders",JSON.stringify(orders));cart=[];save();closeAll();go("orders");showToast("Đặt hàng thành công")}
function renderOrders(){document.getElementById("ordersList").innerHTML=orders.map(o=>`<div class="order-card"><div><b>#${o.id}</b><small>${o.date}</small></div><div style="text-align:right"><strong>${money(o.total)}</strong><br><span class="order-status">${o.status}</span></div></div>`).join("")}
function adminTab(id,b){document.querySelectorAll(".admin-panel").forEach(x=>x.classList.remove("on"));document.getElementById(id).classList.add("on");document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on")}
function renderAdmin(){document.getElementById("ptable").innerHTML=products.map(p=>`<tr><td>${p.name}</td><td>${p.cat}</td><td>${money(p.price)}</td><td><span class="order-status">Đang bán</span></td><td><button>Sửa</button> <button>Xóa</button></td></tr>`).join("")}
let toastTimer;
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("on"),2200)}
renderFeatured();renderMenu();renderCombos();renderCart();renderOrders();renderAdmin();
