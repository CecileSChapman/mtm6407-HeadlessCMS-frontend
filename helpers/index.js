const EVENTS_API_URL = 'https://mtm6407-headlesscms-backend.onrender.com/api/posts'
const API_URL = 'https://mtm6407-headlesscms-backend.onrender.com/api/posts?populate[image][fields][0]=url&populate[authors][fields][1]=firstName&populate[authors][fields][2]=lastName&populate[authors][fields][3]=email';

export { API_URL, EVENTS_API_URL }