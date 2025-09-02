import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_DATA_FUSION = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM3Ny4wNDk2OTgzMjc3ODkyNiIgaGVpZ2h0PSIzNzcuMjkxNTcwNzE1Nzg5NzYiIHZpZXdCb3g9IjAuMTMxMDAwNTE4Nzk4ODI4MTIgLTAuMTIxMDAwMDA2Nzk0OTI5NSA5OS43NjEwMDE1ODY5MTQwNiA5OS44MjQ5OTY5NDgyNDIxOSI+JiN4YTs8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qxe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MntmaWxsOiNhZWNiZmE7fSYjeGE7PC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAuNTkzIDE5LjE4djIwLjE5OWgxOS4yOTlWOS41M2MwLTIuNTM3LS45NzktNC44NDYtMi41OC02LjU2OHptLTkuOTA4IDYxLjIyNUgxOS40MzFMMy40NSA5Ny4zMzdjMS42OTUgMS40NzQgMy45MDggMi4zNjcgNi4zMzEgMi4zNjdoNzAuNTU1YzIuODczIDAgNS40NTMtMS4yNTYgNy4yMjEtMy4yNDh6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTg3LjU3MyA5Ni40MzdjMS41MDEtMS43MDEgMi40MTMtMy45MzUgMi40MTMtNi4zODJWNjAuMjA0SDcwLjY4NXYyMC4yMDF6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE5LjQzMSA4MC40MDVWMjkuMzRoMjAuNTc4VjEwLjA0SDkuNzgxYy01LjMzIDAtOS42NSA0LjMyMS05LjY1IDkuNjV2NzAuMzY1Yy4wMDEgMi45MDYgMS4yODYgNS41MTMgMy4zMiA3LjI4MXptNzcuODgtNzcuNDQzQzk1LjU1IDEuMDY2IDkzLjAzNi0uMTIgOTAuMjQ0LS4xMjFINTkuOTUxVjE5LjE4aDIwLjY0M3oiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function CloudDataFusion(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_DATA_FUSION}
      {...props}
      _style={extendStyle(CLOUD_DATA_FUSION, props)}
    />
  )
}
