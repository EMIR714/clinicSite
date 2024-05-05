export const BASE_URL = 'http://localhost:1337/api';
export const BASE_IMAGE = 'http://localhost:1337';


export async function fetchPosts() {
    const res = await fetch(`${BASE_URL}/posts?populate=*`);
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

export async function postContactForm(data: { name: string; phone: string }) {
  const response = await fetch(`${BASE_URL}/contact-forms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }), // Оберните данные в поле "data"
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}


