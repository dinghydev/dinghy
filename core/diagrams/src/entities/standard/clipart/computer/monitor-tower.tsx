import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MONITOR_TOWER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Monitor_Tower_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MonitorTower(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MONITOR_TOWER)} />
}
