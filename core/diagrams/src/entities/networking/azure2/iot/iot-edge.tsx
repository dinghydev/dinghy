import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOT_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Edge.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function IotEdge(props: NodeProps) {
  return (
    <Shape {...IOT_EDGE} {...props} _style={extendStyle(IOT_EDGE, props)} />
  )
}
