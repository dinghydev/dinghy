import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_ENDPOINTS = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE5Ljk1MDAwMDc2MjkzOTQ1MyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE5Ljk1MDAwMDc2MjkzOTQ1MyAxMiI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNH0mI3hhOwkuc3Qxe2ZpbGw6I2FlY2JmYX0mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02IDZsMSAyaDZsMS0yLTEtMkg3eiIgZmlsbD0iIzQyODVmNCIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03LjUxIDRIN0w2IDZoOGwtMS0yeiIgZmlsbD0iI2FlY2JmYSIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNi45NyA2bDEuNS0yLjI1TDE2IDBoLTN6IiBmaWxsPSIjNDI4NWY0Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2Ljk3IDZoMEwxMyAxMmgzbDMuOTUtNi0xLjQ4LTIuMjV6IiBmaWxsPSIjYWVjYmZhIi8+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuOTggNmwtMS41IDIuMjVMMy45NSAxMmgzeiIgZmlsbD0iIzQyODVmNCIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yLjk4IDZoMGwzLjk3LTZoLTNMMCA2bDEuNDggMi4yNXoiIGZpbGw9IiNhZWNiZmEiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 25,
}

export function CloudEndpoints(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_ENDPOINTS}
      {...props}
      _style={extendStyle(CLOUD_ENDPOINTS, props)}
    />
  )
}
