<script>
import { onMount } from "svelte"
// @ts-ignore
import BiggerPicture from "bigger-picture/svelte";
import "bigger-picture/scss";

onMount(() => {
  const bp = BiggerPicture({
    target: document.body
  });
})
</script>

<h1>Photography</h1>

<p>
  Mid 2024, I got a Nikon D3400 for myself. Photography has always been one of
  those "I wish I could do that" type of hobbies. For a while I had been experimenting with my
  iPhone 14 Pro, which has a pretty good camera by today's standards; but it still didn't feel
  like the real thing. I wanted an interchangable-lens type of camera.
</p>

<p>Now that I have it, here are my experiments.</p>

<section id="photos"></section>
