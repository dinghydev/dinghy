import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KUBERNETES_ENGINE = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjMyOS45MjU5OTcyMzE3OTM4IiBoZWlnaHQ9IjM3OC4yODQ5OTAzMTEyNzg4IiB2aWV3Qm94PSIwIDAgODcuMjkyOTk5MjY3NTc4MTIgMTAwLjA4Nzk5NzQzNjUyMzQ0Ij4mI3hhOzxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiNhZWNiZmE7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6IzQyODVmNDt9JiN4YTs8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00My43NTEgMEwwIDI1LjQ2NXYyLjU4OCA0Ni45Mmw0My43NTIgMjUuMTE1IDQzLjU0MS0yNS4xMjFWMjUuNDczem0yLjQzOCAxMS44NTNsMzIuMTAzIDE4Ljc4MlY2OS43N0w0My43MzkgODkuNzA1IDkgNjkuNzYyVjMwLjY0MWwzMi4xOS0xOC43MzZ2MTQuMTU0TDI0LjUwMyAzNi4xNTNsMTkuMTcyIDExLjUwMiAxOC44ODYtMTEuNTU0LTE2LjM3Mi0xMC4wMjR6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIyLjAyNSA0MC40OTZsLjE2NiAxOS4xNDMtMTMuMjQ3IDcuMzN2Mi43NDJsMi42MzcgMS41MTQgMTIuNjQ4LTYuOTk5IDE2Ljk2MSAxMC42MDJWNTEuOTkzeiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02NS4zNDQgNDAuMjZMNDYuMTg5IDUxLjk3OXYyMi44NDdsMTYuODk5LTEwLjU3NiAxMi41MzkgNi45NzQgMi42MDktMS41MDV2LTIuNzY1bC0xMi43ODQtNy4xMTJ6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _original_width: 17,
  _original_height: 20,
}

export function KubernetesEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...KUBERNETES_ENGINE}
      {...props}
      _style={extendStyle(KUBERNETES_ENGINE, props)}
    />
  )
}
