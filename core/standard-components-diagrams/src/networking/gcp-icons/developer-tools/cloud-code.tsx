import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CODE = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM4My41NTc5Nzc2MjM2MzQ3IiBoZWlnaHQ9IjI1Mi40NzIyMzIwMDk5MzQwNiIgdmlld0JveD0iMCAwIDEwMS40ODI5OTQwNzk1ODk4NCA2Ni44MDAwMDMwNTE3NTc4MSI+JiN4YTs8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDI4NWY0O30mI3hhOwkuc3Qxe2ZpbGw6IzY2OWRmNjt9JiN4YTsJLnN0MntmaWxsOiNhZWNiZmE7fSYjeGE7PC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguMTQgMzUuMTUzbDE1LjgyNCAxNS44MjRMNjguMTQgNjYuOCA1Mi4zMTYgNTAuOTc3em0tMzUuMDk0IDBMNDguODcgNTAuOTc3IDMzLjA0NiA2Ni44IDE3LjIyMiA1MC45Nzd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTg1LjY1OSAxNy42MzNsMTUuODI0IDE1LjgyNC0xNS44MjQgMTUuODI0LTE1LjgyNC0xNS44MjR6bS02OS44MzUgMGwxNS44MjQgMTUuODI0LTE1LjgyNCAxNS44MjRMMCAzMy40NTd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjE0IDBsMTUuODI0IDE1LjgyNEw2OC4xNCAzMS42NDcgNTIuMzE2IDE1LjgyM3pNMzMuMDQ2IDBMNDguODcgMTUuODIzIDMzLjA0NiAzMS42NDcgMTcuMjIyIDE1LjgyM3oiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 40,
  _height: 26,
}

export function CloudCode(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_CODE} {...props} _style={extendStyle(CLOUD_CODE, props)} />
  )
}
