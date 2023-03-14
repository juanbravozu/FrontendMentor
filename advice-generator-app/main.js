const BASE_URL = 'https://api.adviceslip.com/advice';
const btn = document.querySelector('button');
const idParag = document.querySelector('#advice-id');
const adviceParag = document.querySelector('#advice-text');
let loading = false;

async function getAdvice() {
  try {
    if(loading) return;

    loading = true;

    const res = await fetch(BASE_URL);
    const {
      slip: {
        advice,
        id
      }
    } = await res.json();

    idParag.innerText = id;
    adviceParag.innerText = `"${advice}"`;
  } catch (error) {
    console.error(error.message);
  } finally {
    loading = false;
  }
}

btn.addEventListener('click', getAdvice);
window.addEventListener('DOMContentLoaded', getAdvice);