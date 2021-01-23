module.exports = {
  branchPrefix: 'test-renovate/',
  dryRun: true,
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  repositories: [
    'renovatebot/github-action',
    'renovate-tests/cocoapods1',
    'renovate-tests/gomod1',
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      updateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      stabilityDays: 0,
    },
  ],
};
