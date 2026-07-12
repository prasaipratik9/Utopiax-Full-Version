const API_URL = import.meta.env.REACT_APP_API_URL

// TODO: flesh out once backend routes are wired up (auth headers, error handling, etc.)
export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}
