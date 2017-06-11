export class Resume {
    name: string;
    title: string;
    description: string;
    urls: Urls;
    positions: Position[];
}

export class Urls {
    linkedin: string;
    portfolio: string;
    blog: string;
}

export class Position {
    company: string;
    title: string;
    description: string;
    from: string;
    to: string;
    projects: Project[];

    // derived
    id: string;
}

export class Project {
    name: string;
    description: string;
    url: string;
    roles: string[];
    keywords: string[];
    from: string;
    to: string;

    // derived
    id: string;
    tokens: string;
}
