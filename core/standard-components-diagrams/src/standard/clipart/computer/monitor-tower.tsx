import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITOR_TOWER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Monitor_Tower_128x128.png',
  _width: 80,
  _height: 80,
}

export function MonitorTower(props: DiagramNodeProps) {
  return <Shape {...MONITOR_TOWER} {...props} />
}
