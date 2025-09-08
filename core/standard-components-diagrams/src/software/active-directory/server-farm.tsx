import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_FARM = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/server_farm.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ServerFarm(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_FARM}
      {...props}
      _style={extendStyle(SERVER_FARM, props)}
    />
  )
}
