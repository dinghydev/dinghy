import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_TOWER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Monitor_Tower_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function MonitorTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_TOWER}
      {...props}
      _style={extendStyle(MONITOR_TOWER, props)}
    />
  )
}
