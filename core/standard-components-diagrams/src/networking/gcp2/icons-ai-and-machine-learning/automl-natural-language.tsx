import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOML_NATURAL_LANGUAGE = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM4MC41MTE5Nzg1NDYzNTQ0NCIgaGVpZ2h0PSIyNzQuOTI5OTg3NzczNzYyNTUiIHZpZXdCb3g9IjAgMCAxMDAuNjc2OTk0MzIzNzMwNDcgNzIuNzQxOTk2NzY1MTM2NzIiPiYjeGE7PHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTs8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNy41NyA0NC43MjRoMjUuNDc3djUuNDY5SDM3LjU3em0wLTEwLjE0NmgyNS40Nzd2NS40NjlIMzcuNTd6bTAtMTAuMTQ2aDI1LjQ3N3Y1LjQ2OUgzNy41N3ptNTMuNTIgMi4yNzhsOS41ODcgMTMuMTQzLTIzLjc4MiAzMi44ODlIMjkuMDdsLTQuNzQxLTYuNTY4IDQuODExLTYuNTYxaDM4LjEwMXpNOS41ODcgNDYuMDMyTDAgMzIuODg5IDIzLjc4MiAwaDQ3LjgyNWw0Ljc0MSA2LjU2OC00LjgxMSA2LjU2MUgzMy40Mzd6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  _width: 42,
  _height: 34,
}

export function AutomlNaturalLanguage(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOML_NATURAL_LANGUAGE}
      {...props}
      _style={extendStyle(AUTOML_NATURAL_LANGUAGE, props)}
    />
  )
}
