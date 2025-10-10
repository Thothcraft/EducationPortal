import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('Login request received');
  
  try {
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    const { username, password } = body;
    
    if (!username || !password) {
      console.error('Missing username or password');
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    
    console.log('Forwarding request to backend...');
    const backendUrl = 'https://web-production-d7d37.up.railway.app/token';
    
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      });

      console.log('Backend response status:', response.status);
      
      let data;
      try {
        data = await response.json();
        console.log('Backend response data:', JSON.stringify(data, null, 2));
      } catch (parseError) {
        console.error('Error parsing backend response:', parseError);
        const text = await response.text();
        console.error('Raw backend response:', text);
        return NextResponse.json(
          { error: 'Invalid response from authentication server' },
          { status: 502 }
        );
      }

      if (!response.ok) {
        console.error('Backend authentication failed:', data);
        return NextResponse.json(
          { 
            error: data.detail || 'Authentication failed',
            details: data
          },
          { status: response.status }
        );
      }

      console.log('Authentication successful');
      return NextResponse.json(data);
      
    } catch (fetchError) {
      console.error('Error communicating with backend:', fetchError);
      return NextResponse.json(
        { 
          error: 'Could not connect to authentication server',
          details: fetchError instanceof Error ? fetchError.message : String(fetchError)
        },
        { status: 503 }
      );
    }
    
  } catch (error) {
    console.error('Unexpected error in login handler:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
