import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EDGE_HARDWARE_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Edge_Hardware_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function EdgeHardwareCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_HARDWARE_CENTER}
      {...props}
      _style={extendStyle(EDGE_HARDWARE_CENTER, props)}
    />
  )
}
