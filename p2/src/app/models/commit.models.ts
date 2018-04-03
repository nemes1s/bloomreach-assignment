export class CommitStats {
  total: number;
  additions: number;
  deletions: number;
}

export class CommitFile {
  blob_url: string;
  filename: string;
}

export class CommitAuthor {
  date: string;
  name: string;
}

export class CommitHolder {
  sha: string;
  comments_url: string;
  files: CommitFile[];
  stats: CommitStats;
  commit: Commit;
}

export class Commit {
  author: CommitAuthor;
  message: string;
}
