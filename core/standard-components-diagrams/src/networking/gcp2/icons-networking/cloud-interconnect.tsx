import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_INTERCONNECT = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjAgMCAyMCAxOCI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MXtmaWxsOiM2NjlkZjY7fSYjeGE7CS5zdDJ7ZmlsbDojYWVjYmZhO30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00IDhIMHYyaDR6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMgNGgxMHYxMEgzeiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCA4aC00LjY3djJIMjB6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1IDJ2MTRINnYyaDExdi0yVjIgMEg2djJ6TTggNGg1djEwSDh6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 38,
}

export function CloudInterconnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_INTERCONNECT}
      {...props}
      _style={extendStyle(CLOUD_INTERCONNECT, props)}
    />
  )
}
