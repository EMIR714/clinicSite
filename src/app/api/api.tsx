export const BASE_URL = 'https://stapi-on-render.onrender.com/api';


export async function fetchPosts() {
    const res = await fetch(`${BASE_URL}/stuffs?populate=*`);
    const data = await res.json();
    return data.data;
}

export async function fetchMyWorks() {
    const res = await fetch(`${BASE_URL}/my-works?populate=*`);
    const data = await res.json();
    return data.data;
}

export async function fetchServises() {
  const res = await fetch(`${BASE_URL}/servises?populate=*`);
  const data = await res.json();
  return data;
}

export async function fetchFeedbacks() {
  const res = await fetch(`${BASE_URL}/feedbacks`);
  const data = await res.json();
  return data;
}
export async function fetchBannerTexts() {
  const res = await fetch(`${BASE_URL}/banner-texts`);
  const data = await res.json();
  return data;
}

export async function postContactForm(data: { name: string; number: string, description: string }) {
  const response = await fetch(`${BASE_URL}/contact-forms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }), // Верните обертку { data }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}





