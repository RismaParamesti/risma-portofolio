import { portfolioData } from './data/portfolioData';

test('portfolio data includes the primary profile and project', () => {
  expect(portfolioData.profile.name).toBe('Risma Paramesti');
  expect(portfolioData.projects).toHaveLength(1);
  expect(portfolioData.projects[0].name).toMatch(/sistem informasi manajemen pegawai/i);
});
