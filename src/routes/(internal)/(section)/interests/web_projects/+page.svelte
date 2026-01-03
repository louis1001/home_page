<script lang="ts">
    import GlassFrame from "$lib/components/global/glass_frame.svelte";
    import Spinner from "$lib/components/global/spinner.svelte";
    import useFetchRepos from "./scripts/fetchRepos.svelte";

    const response = useFetchRepos()
</script>

<h1>Web Projects</h1>

<GlassFrame class="blurb">
    <p>This is probably my favorite type of software development. It's definitely the
        one I go to when I need to unwind for a moment. Here are the projects That have some kind of
        deployment on the web. It's a mix of design projects, generative art and general graphics
        development. I probably should have used a better naming convention.
    </p>
</GlassFrame>

{#if response.isLoading }
    <Spinner isLoading={true}/>
{:else if response.error }
    <p class="error">An error occurred while fetching repositories</p>
{:else if response.repos }
    <ul>
        {#each response.repos as repo}
        <li>
            <div>
                <h2>
                    <a href={repo.demoUrl()} target="_blank">{repo.name}</a>
                    [<a href={repo.html_url} target="_blank">Github</a>]
                </h2>
                <p>{repo.description}</p>
            </div>
        </li>
        {/each}
    </ul>
{/if}

<style lang='sass'>
:global(.blurb)
    margin: 0 var(--padding-lg) var(--padding-lg)
</style>