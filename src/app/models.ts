export class Resume {
    positions: Position[];
}

export class Position {
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
