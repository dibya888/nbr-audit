// 🔢 বাংলা সংখ্যা
function toBanglaNumber(value) {
    if (value === null || value === undefined) return "";
    return value.toString().replace(/\d/g, d =>
        "০১২৩৪৫৬৭৮৯"[d]
    );
}

let records = [];

fetch("data.json")
    .then(res => res.json())
    .then(data => {
        records = data["AUDIT_SELECTION_23-24_DETAILS"];
        console.log("Records loaded:", records.length);
    });

document.getElementById("tinInput").addEventListener("input", function () {

    const tin = this.value.replace(/\D/g, "");
    this.value = tin;

    const table = document.getElementById("results");
    const mobile = document.getElementById("mobileResult");

    table.innerHTML = "";
    mobile.innerHTML = "";

    if (tin.length !== 12) return;

    const match = records.find(r => String(r.tin) === tin);

    if (!match) {
        table.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-danger">
          কোনো তথ্য পাওয়া যায়নি
        </td>
      </tr>
    `;
        return;
    }

    // ✅ Desktop
    table.innerHTML = `
    <tr>
      <td>${toBanglaNumber(match.tin)}</td>
      <td>${match.zone}</td>
      <td>${match.circle}</td>
      <td>${match.submission_type}</td>
      <td>${toBanglaNumber(match.assessment_year)}</td>
    </tr>
  `;

    // ✅ Mobile
    mobile.innerHTML = `
    <div class="result-card">
      <div class="row-item"><span>টিআইএন:</span> ${toBanglaNumber(match.tin)}</div>
      <div class="row-item"><span>কর অঞ্চল:</span> ${match.zone}</div>
      <div class="row-item"><span>সার্কেল:</span> ${match.circle}</div>
      <div class="row-item"><span>দাখিলের ধরন:</span> ${match.submission_type}</div>
      <div class="row-item"><span>আয়বর্ষ:</span> ${toBanglaNumber(match.assessment_year)}</div>
    </div>
  `;
});