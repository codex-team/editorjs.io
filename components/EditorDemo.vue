<template>
  <div
    id="editorjs"
    class="editor-holder"
    ref="editorjs"
  >
  </div>
</template>

<script lang="ts" setup>
import EditorJs from '@editorjs/editorjs';
import Checklist from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import { onMounted, ref } from 'vue'


const {scrollToCenter}=defineProps<{

  /**
   * Pass true to scroll the demo into view
   */
  scrollToCenter?: Boolean,
}>()

const editorjs = ref<HTMLElement | null>(null);

onMounted(()=>{
  if(scrollToCenter){
    smoothScrollToCenter(editorjs.value)
  }

})

/**
 * Scrolls to targetEle
 */
 function smoothScrollToCenter(targetEle:HTMLElement|null) {
    
    if (!targetEle) {
        return;
    }
    
    const targetPosition = targetEle.getBoundingClientRect().top + window.scrollY;
    const screenHeight = window.innerHeight;
    const targetDivHeight=targetEle.getBoundingClientRect().height
    const targetOffset = targetPosition - (screenHeight / 2)+(targetDivHeight/2);
    console.log(targetDivHeight);
    
    window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
    });
}

new EditorJs({
  autofocus: true,
  placeholder: 'Type text or paste a link',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link', 'marker'],
    },
    image: {
      class: ImageTool,
      inlineToolbar: true,
      config: {
        types: 'image/jpeg, image/jpg, image/png, image/gif, video/mp4, video/quicktime',
        field: 'media',
        /**
         * Custom uploader to emulate image uploading without backend
         * @see https://github.com/editor-js/image#providing-custom-uploading-methods
         */
        uploader: {
          uploadByFile(file: File) {
            return new Promise((resolve) => {
              const reader = new FileReader();

              reader.onload = () => {
                resolve({
                  success: 1,
                  file: {
                    url: reader.result,
                  }
                })
              };
              reader.onerror = () => {
                resolve({
                  success: 0,
                })
              };

              reader.readAsDataURL(file);
            });
          },
          uploadByUrl(url: string){
            return new Promise((resolve) => {
              resolve({
                success: 1,
                file: {
                  url
                }
              })
            })
          }
        }
      },
    },
    list: {
      class: NestedList,
      inlineToolbar: true
    },
    code: {
      class: Code,
      shortcut: 'CMD+SHIFT+D'
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
    },
    delimiter: Delimiter,
    embed: Embed,
    table: {
      class: Table,
      inlineToolbar: true
    },
    raw: Raw,
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C'
    },
    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    warning: Warning,
    checklist: Checklist,
  }
});

</script>

<style lang="postcss">
.editor-holder {
  min-height: 400px;
  @media (--small-viewport) {
    padding: 0 20px;
  }
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: .8 !important;
}
</style>
