import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_STORAGE = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjAgMTYiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJLnN0M3tmaWxsOiNmZmY7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTAgMGgyMHY3SDB6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4IDBoMnY3aC0yeiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOCA3bDItN2gtMnoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCAwaDJ2N0gweiIvPiYjeGE7CTxnIGNsYXNzPSJzdDMiPiYjeGE7CQk8cGF0aCBkPSJNNCAzaDZ2MUg0eiIvPiYjeGE7CQk8cmVjdCB4PSIxMyIgeT0iMiIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9IjEuNSIvPiYjeGE7CTwvZz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMCA5aDIwdjdIMHoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTggOWgydjdoLTJ6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4IDE2bDItN2gtMnoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCA5aDJ2N0gweiIvPiYjeGE7CTxnIGNsYXNzPSJzdDMiPiYjeGE7CQk8cGF0aCBkPSJNNCAxMmg2djFINHoiLz4mI3hhOwkJPHJlY3QgeD0iMTMiIHk9IjExIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiByeD0iMS41Ii8+JiN4YTsJPC9nPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _width: 42,
  _height: 34,
}

export function CloudStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_STORAGE}
      {...props}
      _style={extendStyle(CLOUD_STORAGE, props)}
    />
  )
}
