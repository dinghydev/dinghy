import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_TASKS = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM3Ni4zNDk5ODYzODk2NDkzNiIgaGVpZ2h0PSIzMDcuNjg0MDE3OTkzMzY5MjUiIHZpZXdCb3g9IjAgMCA5OS41NzU5OTYzOTg5MjU3OCA4MS40MDgwMDQ3NjA3NDIxOSI+JiN4YTs8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qxe2ZpbGw6IzQyODVmNDt9JiN4YTs8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wIDB2NDAuODc1aDEwVjB6bTIyLjM5NCAwdjQwLjg3NWgxMFYwem0yMi4zOTQgMHY0MC44NzVoMTBWMHptMjIuMzk0IDB2NDAuODc1aDEwVjB6bTIyLjM5NCAwdjQwLjg3NWgxMFYweiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04OS41NzYgNDAuODc1djQwLjUzM2gxMFY0MC44NzV6bS0yMi4zOTQgMHY0MC41MzNoMTBWNDAuODc1em0tMjIuMzk0IDB2NDAuNTMzaDEwVjQwLjg3NXptLTIyLjM5NCAwdjQwLjUzM2gxMFY0MC44NzV6TTAgNDAuODc1djQwLjUzM2gxMFY0MC44NzV6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  _width: 40,
  _height: 32,
}

export function CloudTasks(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_TASKS}
      {...props}
      _style={extendStyle(CLOUD_TASKS, props)}
    />
  )
}
