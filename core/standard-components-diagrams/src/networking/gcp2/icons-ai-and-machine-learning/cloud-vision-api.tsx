import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_VISION_API = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjAgMTYiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM2NjlkZjY7fSYjeGE7CS5zdDF7ZmlsbDojYWVjYmZhO30mI3hhOwkuc3Qye2ZpbGw6IzQyODVmNDt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8ZyBjbGFzcz0ic3QwIj4mI3hhOwkJPHBhdGggZD0iTTEwIDE2TDAgOGg0bDYgNC45OXoiLz4mI3hhOwkJPHBhdGggZD0iTTIwIDhsLTEwIDh2LTMuMDFMMTYgOHoiLz4mI3hhOwk8L2c+JiN4YTsJPGcgY2xhc3M9InN0MSI+JiN4YTsJCTxwYXRoIGQ9Ik0xMCAzLjAxTDQgOEgwbDEwLTh6Ii8+JiN4YTsJCTxwYXRoIGQ9Ik0yMCA4TDEwIDB2My4wMUwxNiA4eiIvPiYjeGE7CTwvZz4mI3hhOwk8Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIxMCIgY3k9IjgiIHI9IjIiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 34,
}

export function CloudVisionApi(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_VISION_API}
      {...props}
      _style={extendStyle(CLOUD_VISION_API, props)}
    />
  )
}
