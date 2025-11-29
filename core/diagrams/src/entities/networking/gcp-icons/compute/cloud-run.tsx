import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_RUN = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM2NS40NjQ5OTY3NzA0MjQ5MyIgaGVpZ2h0PSIzNzkuMjIyOTk0NDYzNTc3OTUiIHZpZXdCb3g9IjAgMCA5Ni42OTU5OTkxNDU1MDc4MSAxMDAuMzM1OTk4NTM1MTU2MjUiPiYjeGE7PHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MXtmaWxsOiNhZWNiZmE7fSYjeGE7PC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuNzk0IDEwMC4zMzZMNDYuOTIgNTAuMTY4aDQ5Ljc3NnpNMCA5OS42NzFsMTIuOTc2LTQ5LjUwMkgyOS4yMkwxNi44OTcgOTIuMDU0eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yOS43OTQgMEw0Ni45MiA1MC4xNjhoNDkuNzc2ek0wIC42NjZsMTIuOTc2IDQ5LjUwMkgyOS4yMkwxNi44OTcgOC4yODN6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function CloudRun(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_RUN)} />
}
