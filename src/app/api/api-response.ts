export interface ApiLabel {
  label: string;
}

export interface ApiResponse {
  feed: ApiFeed;
}

export interface ApiFeed {
  author: ApiAuthor;
  entry: ApiEntry[];
  updated: ApiLabel;
  rights: ApiLabel;
  title: ApiLabel;
  icon: ApiLabel;
  link: [
    {
      attributes: {
        rel: string,
        type: string,
        href: string
      }
    },
    {
      attributes: {
        rel: string,
        href: string
      }
    }
  ];
  id: ApiLabel;
}

export interface ApiAuthor {
  name: ApiLabel;
  uri: ApiLabel;
}

export interface ApiEntry {
  'im:name': ApiLabel;
  'im:image': {
    attributes: {
      height: number
    }
  } & ApiLabel[];
  summary: ApiLabel;
  'im:price': {
    attributes: {
      amount: string,
      currency: string
    }
  } & ApiLabel;
  'im:contentType': {
    attributes: {
      term: string
    } & ApiLabel
  };
  rights: ApiLabel;
  title: ApiLabel;
  link: {
    attributes: {
      rel: string,
      type: string,
      href: string
    }
  };
  id: {
    attritubes: {
      'im:id': string,
      'im:bundleId': string
    }
  } & ApiLabel;
  'im:artist': {
    attritubes: {
      href: string
    }
  } & ApiLabel;
  category: {
    attributes: {
      'im:id': string,
      term: string,
      scheme: string
    } & ApiLabel
  };
  'im:releaseDate': {
    attributes: ApiLabel
  } & ApiLabel;
}
