type Info = {
    count: number,
    pages: number,
    next: string,
    prev?: string
}

type NameUrl = {
    name: string;
    url: string;
}

export type CharacterResult = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: NameUrl,
    location: NameUrl,
    image: string,
    episode: string[],
    url: string,
    created: string

}

export type AllCharactersProps = {
info: Info
results: CharacterResult[];
}

