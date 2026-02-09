:root{
  --bg1:#ffe0ec;
  --bg2:#dff3ff;
  --card:#ffffffcc;
  --text:#222;
  --muted:#555;
  --pink:#ff4d7d;
  --pink2:#ff7aa2;
  --radius:22px;
  --shadow: 0 22px 60px rgba(0,0,0,.14);
}

*{box-sizing:border-box}

body{
  margin:0;
  min-height:100vh;
  display:grid;
  place-items:center;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:
    radial-gradient(circle at 20% 20%, var(--bg2), transparent 55%),
    radial-gradient(circle at 80% 30%, var(--bg1), transparent 55%),
    linear-gradient(135deg, #ffffff, #f7fbff);
  padding:18px;
  color:var(--text);
}

.wrap{
  width:min(760px, 96vw);
}

.card{
  background:var(--card);
  border:1px solid rgba(255,255,255,.7);
  border-radius:var(--radius);
  padding:28px 22px 18px;
  box-shadow:var(--shadow);
  backdrop-filter: blur(10px);
  position:relative;
  overflow:hidden;
}

.emoji{
  width:56px;height:56px;
  display:grid;place-items:center;
  border-radius:16px;
  background: linear-gradient(135deg,#fff,#ffe7ef);
  box-shadow: 0 12px 26px rgba(255,77,125,.18);
  font-size:26px;
  margin-bottom:10px;
}

.title{
  margin:6px 0 8px;
  font-size: clamp(26px, 3.6vw, 40px);
  letter-spacing:-.02em;
}

.name{ color:var(--pink); }

.sub{
  margin:0 0 14px;
  color:var(--muted);
  line-height:1.4;
}

.messageBox{
  background: linear-gradient(135deg, #ffffff, #fff6fa);
  border: 1px solid rgba(255,255,255,.9);
  border-radius: 18px;
  padding:16px;
  box-shadow: 0 10px 22px rgba(0,0,0,.05);
}

.messageBox p{ margin:0 0 10px; line-height:1.55; }
.messageBox p:last-child{ margin:0; }
.small{ color:var(--muted); font-size:14px; }

.btnRow{
  display:flex;
  gap:12px;
  margin-top:16px;
  flex-wrap:wrap;
}

.btn{
  border:none;
  border-radius:999px;
  padding:12px 16px;
  font-weight:800;
  cursor:pointer;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
}

.btn:active{ transform: translateY(1px) scale(.99); }

.yes{
  background: linear-gradient(135deg, var(--pink), var(--pink2));
  color:#fff;
  box-shadow: 0 14px 30px rgba(255,77,125,.28);
}
.yes:hover{ transform: translateY(-1px); }

.no{
  background:#fff;
  color:#333;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 10px 20px rgba(0,0,0,.06);
}
.no:hover{ transform: translateY(-1px); }

.meter{
  margin-top:14px;
  padding-top:6px;
}

.bar{
  width:100%;
  height:12px;
  border-radius:999px;
  background: rgba(0,0,0,.07);
  overflow:hidden;
}

.fill{
  width:0%;
  height:100%;
  border-radius:999px;
  background: linear-gradient(90deg, #ffd1dd, var(--pink));
  transition: width .25s ease;
}

.meterText{
  margin-top:8px;
  font-size:13px;
  color:var(--muted);
}

.final{
  margin-top:18px;
  padding:16px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.9);
  background: linear-gradient(135deg, #f4fff7, #ffffff);
  box-shadow: 0 10px 22px rgba(0,0,0,.05);
}

.hidden{ display:none; }

.foot{
  margin-to
