<script lang="ts">
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

{#if isLoading}
<div class="loading-spinner">
  <div style="--i: 0"></div>
  <div style="--i: 1"></div>
  <div style="--i: 2"></div>
  <div style="--i: 3"></div>
  <div style="--i: 4"></div>
</div>
{/if}

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

.loading-spinner
  position: relative
  height: 3rem
  margin: 1rem auto

  div
    position: absolute
    width: 3rem
    height: 3rem
    left: 50%
    transform: translateX(-50%)
    opacity: .5
    display: inline-block
    border-radius: 100%
    border: .5rem solid var(--main-col)
    border-bottom: .5rem solid #fff0
    --duration: 2s
    --delay: calc(-1 * var(--i) * var(--duration) * 0.22)
    animation: border-animation var(--duration) var(--delay) linear infinite forwards

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

@keyframes border-animation
  0%
    transform: scale(1) rotate(0deg)
  
  25%
    transform: scale(.9) rotate(90deg)

  50%
    transform: scale(1) rotate(180deg)

  75%
    transform: scale(.8) rotate(270deg)
  
  100%
    transform: rotate(360deg)

</style>