<script lang="ts">
import Spinner from "$lib/components/global/spinner.svelte";
import type { BiggerPictureInstance } from "bigger-picture";
import "bigger-picture/scss";
import { browser } from "$app/environment";
import type { PageData } from "./$types";

type Photo = PageData["photos"][number];

const { data } = $props();

const previewUrls: Photo[] = data?.photos ?? [];
const isLoading = false;

let BiggerPictureLib: typeof import("bigger-picture")["default"] | null = null;
let bp: BiggerPictureInstance | null = null;

$effect(() => {
  if (!browser) return;

  (async () => {
    try {
      if (!BiggerPictureLib) {
        const mod = await import("bigger-picture");
        BiggerPictureLib = mod.default;
      }

      if (!bp && BiggerPictureLib && previewUrls.length > 0) {
        bp = BiggerPictureLib({
          target: document.body
        });
      }
    } catch (err) {
      console.error("Failed to load BiggerPicture", err);
    }
  })();
})

function openGallery(e: Event) {
  e.preventDefault();

  let imageLinks = document.querySelectorAll("#photos .image-link")

  if (!bp) return;

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
    aria-label={obj.alt}
    data-img={obj.fullImage.src}
    data-height={obj.fullImage.h ?? obj.fullImage.height}
    data-width={obj.fullImage.w ?? obj.fullImage.width}
  >
    <img
      src={obj.display.src}
      alt={obj.alt}
      width={obj.display.w ?? undefined}
      height={obj.display.h ?? undefined}
      loading="lazy"
      decoding="async"
    />
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