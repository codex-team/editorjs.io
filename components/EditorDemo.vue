<template>
  <div
    id="editorjs"
    class="editor-holder"
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
  @media (--small-viewport) {
    padding: 0 20px;
  }
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: .8;
}
</style>
