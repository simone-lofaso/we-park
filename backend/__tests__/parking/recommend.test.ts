import app from '../../app';
import req from 'supertest';

// Mock mysql2 package to return an object with just query and execute
jest.mock('mysql2', () => {
  return {
    createConnection: () => ({
      query: () => {},
      execute: () => {},
    }),
  };
});

// Create jest function
const mockSpace = jest.fn();

// Mock Spaces object to get getFirst return an object with parkedUserId mapping to return value of mockSpace
jest.mock('../../database/space', () => ({
  getFirst: () => ({ parkedUserId: mockSpace() }),
}));

describe('/api/v1/parking/reccomend', () => {
  it('200', async () => {
    // Have mockSpace return null
    mockSpace.mockImplementation(() => null);
    const res = await req(app).get('/api/v1/parking/recommend');
    expect(res.status).toBe(200);
  });
  it('500', async () => {
    // Have mockSpace return 0
    mockSpace.mockImplementation(() => 0);
    const res = await req(app).get('/api/v1/parking/recommend');
    expect(res.status).toBe(500);
  });
});
