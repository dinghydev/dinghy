import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TENSORFLOW = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM0Ni4zMDMyMTgzOTM3OTEiIGhlaWdodD0iMzc5LjE5NjAwODk5NjY3Mjk2IiB2aWV3Qm94PSIwIDAgOTEuNjI1OTk5NDUwNjgzNiAxMDAuMzI5MDAyMzgwMzcxMSI+JiN4YTs8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDI4NWY0O30mI3hhOzwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3LjcyOSAxMDAuMzI5VjBsNDMuODk3IDI1LjAyNXYyMS41NjJsLTI2LjgtMTUuMzQxdjExLjk1bDEzLjIxMyA2Ljg3NnYxOS4xNzdsLTEzLjIxMy03LjcxN3YyOS4wNDZ6TTAgMjUuMDI1TDQzLjQ2MyAwdjEwMC4zMjlsLTE2Ljc1Ni05Ljc1MnYtNTkuMzNMMCA0Ni41ODd6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _width: 36,
  _height: 40,
}

export function Tensorflow(props: DiagramNodeProps) {
  return (
    <Shape {...TENSORFLOW} {...props} _style={extendStyle(TENSORFLOW, props)} />
  )
}
