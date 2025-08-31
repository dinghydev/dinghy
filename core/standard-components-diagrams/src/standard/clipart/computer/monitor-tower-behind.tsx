import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_TOWER_BEHIND = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Monitor_Tower_Behind_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function MonitorTowerBehind(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_TOWER_BEHIND}
      {...props}
      _style={extendStyle(MONITOR_TOWER_BEHIND, props)}
    />
  )
}
