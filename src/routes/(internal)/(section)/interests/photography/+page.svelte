<script lang="ts">
  import Spinner from "$lib/components/global/spinner.svelte";
import BiggerPicture, { type BiggerPictureInstance } from "bigger-picture";
import "bigger-picture/scss";

let previewUrls = $state([] as any[]);
let isLoading = $state(true)

const imageModules = import.meta.glob(
  '$lib/assets/photos/*.{jpeg,jpg}',
  {
    query: {
      enhanced: true
    }
  }
)

let bp: BiggerPictureInstance

$effect(() => {
  (async function() {
    let result = []
    for (let entry in imageModules) {
      let module = imageModules[entry]

      let imageModule = await module()

      result.push({
        // @ts-ignore
        fullImage: imageModule.default.img,
        // @ts-ignore
        enhanced: imageModule.default
      })
    }
    previewUrls = result
    isLoading = false
    
    bp = BiggerPicture({
      target: document.body
    });
  })()
})

function openGallery(e: Event) {
  e.preventDefault();

  let imageLinks = document.querySelectorAll("#photos .image-link")

  bp.open({
    items: imageLinks,
    el: e.currentTarget ?? undefined
  })
}
</script>

<h1>Photography</h1>

<p>
  Mid 2024, I got a Nikon D3400 for myself. Photography has always been one of
  those "I wish I could do that" type of hobbies. For a while I had been experimenting with my
  iPhone 14 Pro, which has a pretty good camera by today's standards; but it still didn't feel
  like the real thing. I wanted an interchangable-lens type of camera.
</p>

<p>Now that I have it, here are my experiments.</p>

<Spinner isLoading={isLoading} />

<section id="photos">
  {#each previewUrls as obj}
  <a
    class="image-link"
    href={obj.fullImage.src}
    onclick={openGallery}
    target="_blank"
    data-img={obj.enhanced.sources.jpeg}
    data-height={obj.fullImage.h}
    data-width={obj.fullImage.w}
  >
    <enhanced:img src={obj.enhanced} alt="some alt text" sizes="(max-width:2160px) 800px, (max-width:1920px) 600px, (max-width:768px) 200px" />
  </a>
  {/each}
</section>

<style lang='sass'>
#photos
  --layout-gaps: .8rem
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: var(--layout-gaps)
  padding-inline: 2rem

#photos img
  width: 100%
  height: auto
  aspect-ratio: 1 / 1

  object-fit: cover

  transition: .1s ease-in-out transform
  cursor: pointer

  // Polaroid effect
  box-sizing: border-box
  background: white
  border-color: var(--main-col)

  &:hover
    transform: scale(1.05)
  
  &:active
    transform: scale(0.9)

.image-link
  animation: shimmer 1s ease-in-out infinite forwards
  background: var(--background-col)

@media screen and (max-width: 1250px)
  #photos
    grid-template-columns: repeat(3, 1fr)

@media screen and (max-width: 900px)
  #photos
    grid-template-columns: repeat(2, 1fr)
    padding-inline: .2rem

@media screen and (max-width: 580px)
  #photos
    grid-template-columns: repeat(1, 1fr)

@keyframes shimmer
  15%
    background: var(--background-col)

  50%
    background: #222

  85%
    background: var(--background-col)

</style>