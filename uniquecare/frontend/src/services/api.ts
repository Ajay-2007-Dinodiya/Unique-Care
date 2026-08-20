const API_BASE = 'http://localhost:5000/api';

export interface IssueRecord {
  id: string;
  title: string;
  location: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved';
  assignee: string;
  reporter: string;
  date: string;
  time?: string;
  description?: string;
  category?: string;
}

export async function fetchIssuesFromApi(): Promise<IssueRecord[] | null> {
  try {
    const res = await fetch(`${API_BASE}/issues`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) {
      return data.data;
    }
    return null;
  } catch (e) {
    console.warn('Backend API unavailable, using local state fallback');
    return null;
  }
}

export async function createIssueApi(issue: Partial<IssueRecord>): Promise<IssueRecord | null> {
  try {
    const res = await fetch(`${API_BASE}/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(issue)
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.success && data.data) {
      return data.data;
    }
    return null;
  } catch (e) {
    console.warn('Backend POST failed, using client fallback');
    return null;
  }
}

export async function updateIssueStatusApi(id: string, status: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/issues/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}
