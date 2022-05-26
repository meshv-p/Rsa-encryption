/**
 * M , P , Q , E
 *
 *
 * n = pq
 *
 * Ø = (p-1)(q-1)
 *
 *
 *  q    r1(Ø)     r2(e)    r     t1      t2      t=(t1-qt2)
 *
 *
 *
 *
 * d =
 *
 *
 *  ciper = M^e (|n|)
 *
 *
 *  Plain Text = C^d (|n|)
 *          r1 = q*r2 + r
 *          11 = 5*2 +1
 *          (11 - 1)/5 = 2
 */

let valueOfM = document.getElementById("m"),
  en = document.querySelector(".en"),
  de = document.querySelector(".de");

function findD(r1, r2, t1 = 0, t2 = 1) {
  let r, q;

  // check if r2 then return
  if (r2 == 0) {
    return t1;
  }

  // find remender
  r = r1 % r2;
  // find multiplicand
  q = (r1 - r) / r2;
  let t = t1 - q * t2;
  if (r2 != 0) return findD(r2, r, t2, t);
}

function getCiperText(M, e, n) {
  return Math.pow(M, e) % n;
}

function getPlainText(C, d, n) {
  return Math.pow(C, d) % n;
}

function startAlgo(p, q, e, M = Number(valueOfM.value)) {
  console.log(M);
  let n = p * q;

  let totion = (p - 1) * (q - 1);

  let d = findD(totion, e);

  if (d < 0) {
    d = totion + d;
  }

  let CT = getCiperText(M, e, n);
  console.log("The Ciper text: ", CT);
  en.innerHTML = `<span> ${CT} </span>`;
  let PT = getPlainText(CT, d, n);
  console.log("The Plain text: ", PT);
  de.innerHTML = `<span>${PT}</span>`;
}
startAlgo(3, 11, 7);
