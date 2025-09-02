import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_OPTIMIZED_OS = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwIDBhMTAgMTAgMCAxIDAgMTAgMTBoMEExMCAxMCAwIDAgMCAxMCAwem0wIDE4YTggOCAwIDAgMS00LjE4LTEuMThsMy41OC0yLjA3aDB2LTQuNUw1LjUxIDh2NC41MmwyLjc1IDEuNTktMy40NiAyQTggOCAwIDAgMSA2LjA4IDN2NGgwTDEwIDkuMjggMTMuOSA3IDEwIDQuNzcgNy4yNCA2LjM2VjIuNDdhOCA4IDAgMCAxIDEwLjMxIDQuNyA4LjEgOC4xIDAgMCAxIC41MSAyLjgzdi4wN0wxNC40NiA4aDBsLTMuOSAyLjI2djQuNTFsMy45LTIuMjVWOS4zNGwzLjQ1IDJBOCA4IDAgMCAxIDEwIDE4eiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function ContainerOptimizedOs(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_OPTIMIZED_OS}
      {...props}
      _style={extendStyle(CONTAINER_OPTIMIZED_OS, props)}
    />
  )
}
