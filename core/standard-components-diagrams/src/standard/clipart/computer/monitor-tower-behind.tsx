import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITOR_TOWER_BEHIND = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Monitor_Tower_Behind_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function MonitorTowerBehind(props: DiagramNodeProps) {
  return <Shape {...MONITOR_TOWER_BEHIND} {...props} />
}
