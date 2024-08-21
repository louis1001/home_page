<header>
    <enhanced:img
        id="profile-photo"
        src="/static/site-images/profile.jpg?200"
        sizes="200pt"
    />
    <div>
        <h1 class="main-name">Luis González</h1>
        <h2 id="career">Software Developer</h2>
    </div>
</header>

<style lang="sass">
header #profile-photo
    width: 200px
    height: 200px
    
header
    display: grid
    align-content: center
    justify-items: center
    flex-direction: column
    align-items: center
    padding: 20px 0
    margin: 0 auto
    min-height: min(calc(100vh - 200px), 1000px)

h1
    font-size: 5rem
    margin: .1em 0

h2
    font-size: 1.8rem
    text-align: left

header img
    max-width: 200px
    border-radius: 100%

    box-shadow: 0 .5px 4px 1px #fff3

    // animation: 240s 20s infinite linear rotate-slowly

@media screen and (max-width: 720px)
    html, body
        font-size: 10pt
    header
        min-height: unset
        margin-block: 2em
        padding-inline: 1em

    #career
        text-align: right
        padding-right: .5em

@media screen and (max-width: 370px)
    header img
        max-width: 8rem
        max-height: 8rem
        aspect-ratio: 1

    header h1
        font-size: 3rem

// @keyframes rotate-slowly
//     0%
//         transform: rotate(0deg)

//     100%
//         transform: rotate(360deg)
</style>
