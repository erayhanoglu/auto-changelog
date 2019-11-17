import { generateCommits } from '../utils/commits'

export const tags = ['v1.0.0', 'v0.1.0', 'v0.0.2', 'v0.0.1']

export const commitsMap = {
  'v1.0.0..': generateCommits([
    {
      hash: '2401ee4706e94629f48830bab9ed5812c032734a',
      date: '2015-12-29T21:57:19.000Z',
      message: 'Unreleased commit\n\nFixes #6',
      files: 5,
      insertions: 10,
      deletions: 10
    }
  ]),
  'v0.1.0..v1.0.0': generateCommits([
    {
      hash: '77bb243170408cd18e70ca05bf8b3ca7646ea437',
      date: '2015-12-15T12:03:09.000Z',
      message: '1.0.0\n\nThis is my major release description.\n\n- And a bullet point',
      files: 2,
      insertions: 8,
      deletions: 2
    },
    {
      hash: 'b0b304049847d9568585bc11399fa6cfa4cab5dc',
      date: '2015-12-29T21:57:19.000Z',
      message: 'Some breaking change',
      files: 5,
      insertions: 10,
      deletions: 10
    }
  ]),
  'v0.0.2..v0.1.0': generateCommits([
    {
      hash: 'db92947e6129cc20cd7777b7ed90b2bd547918c0',
      date: '2015-12-29T21:19:17.000Z',
      message: '0.1.0',
      files: 2,
      insertions: 8,
      deletions: 2
    },
    {
      hash: 'e9a43b2bf50449fc0d84465308e6008cc1597bb3',
      date: '2015-12-29T21:19:19.000Z',
      message: 'Another commit that fixes nothing but with less changes',
      files: 1,
      insertions: 1,
      deletions: 1
    },
    {
      hash: '12c0624e7e419a70bd5f3b403d7e0bd8f23ec617',
      date: '2015-12-29T21:18:19.000Z',
      message: 'Commit that fixes nothing with `backticks` and &lt;html&gt;',
      files: 1,
      insertions: 2,
      deletions: 3
    }
  ]),
  'v0.0.1..v0.0.2': generateCommits([
    {
      hash: 'ef17dcc732d282f027aa3bddf8f91cbb05998cc8',
      date: '2015-12-28T21:17:17.000Z',
      message: '0.0.2',
      files: 2,
      insertions: 8,
      deletions: 2
    },
    {
      hash: '0e24bf427a51eac52133cc731b4b5d74a7e04672',
      date: '2015-12-24T20:29:22.000Z',
      message: 'Merge pull request #5 from repo/branch\n\nShould not parse #4 in PR title',
    },
    {
      hash: '92839699a6aaea148dcd72ea897321e66cae0c18',
      date: '2015-12-29T11:35:54.000Z',
      message: 'Merge remote-tracking branch \'random-branch\' into master',
      files: 1,
      insertions: 1,
      deletions: 0
    },
    {
      hash: '17fbef87e82889f01d8257900f7edc55b05918a2',
      date: '2015-12-28T11:35:54.000Z',
      message: 'Commit 4 fixes #4 in the subject\n\nWith some extra notes here',
      files: 1,
      insertions: 1,
      deletions: 0
    }
  ]),
  'v0.0.1': generateCommits([
    {
      hash: '796edd129a6aaea148dcd72ea897321e66cae0c1',
      date: '2015-12-15T12:03:09.000Z',
      message: '0.0.1',
      files: 2,
      insertions: 8,
      deletions: 2
    },
    {
      hash: '31b7d3da24d64e32a0a7e558f254d01c348613f3',
      date: '2015-12-15T11:37:05.000Z',
      message: 'Merge pull request #3 from repo/branch\n\nThird commit with same name as PR'
    },
    {
      hash: '1c2694e44a032d2ab6d6eaa381beaf23ba3d9573',
      date: '2015-12-15T11:31:06.000Z',
      message: 'Third commit with same name as PR',
      files: 8,
      insertions: 57,
      deletions: 53
    },
    {
      hash: '90ef33485369fc7892d11b2e4da04ffb64df1e99',
      date: '2015-12-15T11:31:06.000Z',
      message: 'Second commit\n\nResolves #1 and fixes https://github.com/user/repo/issues/2',
      files: 8,
      insertions: 57,
      deletions: 53
    },
    {
      hash: '158fdde54b6188c9f9ca3034e9cb5bcc3fe3ff69',
      date: '2015-12-14T17:06:12.000Z',
      message: 'First commit',
      files: 7,
      insertions: 37,
      deletions: 22
    }
  ])
}
