export class Search {
  static readonly type = '[App] Search';
  constructor(public search: string) { }
}

export class GetRecommendationApps {
  static readonly type = '[App] GetRecommendationApps';
  constructor(public limit: number) { }
}

export class GetTopApps {
  static readonly type = '[App] GetTopApps';
  constructor(public limit: number) { }
}

export class GetMoreTopApps {
  static readonly type = '[App] GetMoreTopApps';
}
