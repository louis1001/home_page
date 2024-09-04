export class Repo {
    constructor(
        public id: number,
        public name: string,
        public full_name: string,
        public html_url: string,
        public description: string,
        public homepage: string,
        public has_pages: boolean
    ) {

    }

    static fromJSON(obj: any): Repo {
        return new Repo(
            obj.id,
            obj.name,
            obj.full_name,
            obj.html_url,
            obj.description,
            obj.homepage,
            obj.has_pages
        )
    }

    demoUrl(): string {
        const userName = 'louis1001'

        return `https://${userName}.github.io/${this.name}`
    }
}

class RepoResponse {
    repos: Repo[]|undefined = $state()
    error: any = $state()
    isLoading = $state(false)
}

export default function useFetchRepos() {
    const resp = new RepoResponse()

    async function fetchData() {
        resp.isLoading = true

        const userName = "louis1001"
        const url = `https://api.github.com/users/${userName}/repos?per_page=100`

        try {
            const response = await fetch(url)

            const objects = await response.json() as Repo[]

            console.log(objects[0])

            resp.repos = objects
                .filter(x => x.has_pages)
                .map(Repo.fromJSON)
            resp.error = undefined
        } catch(e) {
            resp.error = e
            resp.repos = undefined
        }
        resp.isLoading = false
    }

    fetchData()

    return resp
}