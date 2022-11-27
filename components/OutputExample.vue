<template>
  <pre class="output">{
    "time" : 1656103342581,
    "blocks" : [
        {
            "id" : "eTPexwRTHY",
            "type" : <span class="output__type">"header"</span>,
            "data" : <span class="output__data">{
                "text" : "Editor.js",
                "level" : 2
            }</span>
        },
        {
            "id" : "ClI-SnQBe-",
            "type" : <span class="output__type">"paragraph"</span>,
            "data" : <span class="output__data"> {
                "text" : "Hey. Meet the new Editor. On this page you can see
            }</span>
        },
        {
            "id" : "YsYurfPSLD",
            "type" : <span class="output__type">"header"</span>,
            "data" : <span class="output__data">{
                "text" : "Key features",
                "level" : 3
            }</span>
        },</pre>
  <pre class="output output--last">
        {
            "id" : "NsFz5HlUU1",
            "type" : <span class="output__type">"list"</span>,
            "data" : <span class="output__data">{
                "style" : "unordered",
                "items" : [
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",</span>
  </pre>
</template>

<style lang="postcss">
  .output {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 72px;
    text-align: left;
    width: 100%;
    margin-bottom: 0;
    font-size: 12px;
    line-height: 20px;

    &__type {
      color: var(--color-text-danger);
    }

    &__data {
      color: var(--color-text-active);
    }

    &--last {
      margin-top: 0;
      mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
      margin-bottom: 45px;
    }
  }
</style>
