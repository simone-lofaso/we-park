import app from '../../app';
import req from 'supertest';

jest.mock('mysql2', () => {
  return {
    createConnection: () => ({
      query: () => {},
      execute: () => {},
    }),
  };
});

describe('/user/register', () => {
  it('Registers the user and status 200', async () => {
    const res = await req(app).post('/api/v1/user/register').send({
      email: 'test@email.com',
      password: 'pass123',
    });
    expect(res.status).toBe(200);
  });
});
