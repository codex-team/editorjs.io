<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">

  <div
    class="output-code"
    :class="{
      'output-code--expanded': isCodeExpanded
    }"
  >
    <div
      class="output-code__wrapper"
    >
      <Json
        :value="json"
        class="output-code__inner"
      />
      <div class="output-code__bottom-gradient"></div>
      <div class="output-code__right-gradient"></div>
    </div>
    <div
      class="output-code__expand-button"
      @click="toggleCode"
      ref="expandButton"
    >
      <codex-icon name="IconChevronDown" />
      {{ expandButtonText }}
    </div>
  </div>
</template>

<script lang="ts" setup>

const json = {
  time: (new Date()).getTime(),
  blocks: [
    {
      id: 'mhTl6ghSkV',
      type: 'paragraph',
      data: {
        text: 'Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓'
      }
    },
    {
      id: 'l98dyx3yjb',
      type: 'header',
      data: {
        text: 'Key features',
        level: 3
      }
    },
    {
      id: 'os_YI4eub4',
      type: 'list',
      data: {
        type: 'unordered',
        items: [
          'It is a block-style editor',
          'It returns clean data output in JSON',
          'Designed to be extendable and pluggable with a <a href="https://editorjs.io/creating-a-block-tool">simple API</a>',
        ],
      }
    },
    {
      id: '1yKeXKxN7-',
      type: 'header',
      data: {
        text: 'What does it mean «block-styled editor»',
        level: 3
      }
    },
    {
      id: 'TcUNySG15P',
      type: 'paragraph',
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent <sup data-tune=\"footnotes\">1</sup> contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
      tunes: {
        footnotes: [
          "It works more stable then in other WYSIWYG editors. Same time it has smooth and well-known arrow navigation behavior like classic editors.",
        ]
      }
    },
    {
      id: 'M3UXyblhAo',
      type: 'header',
      data: {
        text: 'What does it mean clean data output?',
        level: 3
      }
    },
    {
      id: 'KOcIofZ3Z1',
      type: 'paragraph',
      data: {
        text: 'There are dozens of ready-to-use Blocks and a simple API <sup data-tune=\"footnotes\">2</sup> for creating any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA buttons, and even games.',
      },
      tunes: {
        footnotes: [
          "Just take a look at our Creating Block Tool guide. You'll be surprised.",
        ]
      }
    },
    {
      id: 'ksCokKAhQw',
      type: 'paragraph',
      data: {
        text: 'Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, <mark class=\"cdx-marker\">Editor.js outputs JSON object</mark> with data of each Block.',
      },
    },
    {
      id: 'XKNT99-qqS',
      type: 'attaches',
      data: {
        file: {
          url : 'https://drive.google.com/user/catalog/my-file.pdf',
          size: 12902,
          name: 'file.pdf',
          extension: 'pdf'
        },
        title: 'My file'
      },
    },
    {
      id: '7RosVX2kcH',
      type: 'paragraph',
      data: {
        text: 'Given data can be used as you want: render with HTML for Web clients, render natively for mobile apps, create the markup for Facebook Instant Articles or Google AMP, generate an audio version, and so on.',
      },
    },
    {
      id: 'eq06PsNsab',
      type: 'paragraph',
      data: {
        text: 'Clean data is useful to sanitize, validate and process on the backend.',
      },
    },
    {
      id: 'hZAjSnqYMX',
      type: 'image',
      data: {
        file: {
          url : 'assets/codex2x.png',
        },
        withBorder: false,
        withBackground: false,
        stretched: true,
        caption: 'CodeX Code Camp 2019'
      },
    },

  ]
}

const isCodeExpanded = ref(false);
const expandButton = ref<HTMLElement | null>(null);

/**
 * Expands/Collapses the code
 */
function toggleCode() {
  isCodeExpanded.value = !isCodeExpanded.value;

  if (isCodeExpanded.value === false) {
    window.requestAnimationFrame(() => {
      expandButton.value?.scrollIntoViewIfNeeded();
    })
  }
}

const expandButtonText = computed(() => {
  if (isCodeExpanded.value === false) {
    return 'Show the whole example';
  }

  return 'Hide the whole example'
})

</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap');

.output-code {
  --code-height: 600px;

  max-width: 100%;
  position: relative;

  @media (--small-viewport) {
    --code-height: 500px;
  }

  --gradient-z-index: calc(var(--z-header) - 2);

  &--expanded {
    --code-height: auto;
  }

  &__wrapper {
    height: var(--code-height);
    display: block;
    overflow: hidden;
  }

  &__inner {
    display: block;
    overflow-y: hidden;
  }

  &__bottom-gradient {
    position: absolute;
    height: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(246, 251, 255, 0) 0%, var(--color-background-output) 100%);
    z-index: var(--gradient-z-index);
  }

  &__right-gradient {
    --width: 70px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(calc(var(--layout-container-max-width)) / 2 - var(--layout-padding-horizontal) + calc(var(--layout-section-content-width) / 2) - var(--width));
    width: var(--width);
    background: linear-gradient(90deg, rgba(246, 251, 255, 0) 0%, var(--color-background-output) 100%);
    z-index: var(--gradient-z-index);

    @media (--small-viewport) {
      left: auto;
      right: 0;
    }
  }

  &__expand-button {
    background-color: var(--color-background-output);
    color: #3C4C51;

    font-size: 14px;
    line-height: 1em;
    font-weight: 500;
    padding: 7px 9px;
    border-radius: 10px;
    border: 1px solid #DCEBF3;
    box-shadow: 0px 8px 25px rgba(190, 219, 235, 0.46);
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: calc(var(--gradient-z-index) + 1);

    &:hover {
      background-color: #F2F9FE;
    }

    svg {
      margin-right: 7px;
    }
  }

  &--expanded &__expand-button {
    position: sticky;
    bottom: 50px;

    @media (--small-viewport) {
      margin-left: 50%;
    }

    svg {
      transform: rotate(180deg);
    }
  }

}
</style>
