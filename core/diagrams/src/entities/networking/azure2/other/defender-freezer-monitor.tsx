import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_FREEZER_MONITOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Freezer_Monitor.svg;strokeColor=none;',
  },
  _width: 47.599999999999994,
  _height: 68,
}

export function DefenderFreezerMonitor(props: NodeProps) {
  return (
    <Shape
      {...DEFENDER_FREEZER_MONITOR}
      {...props}
      _style={extendStyle(DEFENDER_FREEZER_MONITOR, props)}
    />
  )
}
