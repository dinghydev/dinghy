import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IOT_CORE_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 68,
}

export function IotCore2(props: DiagramNodeProps) {
  return (
    <Shape {...IOT_CORE_2} {...props} _style={extendStyle(IOT_CORE_2, props)} />
  )
}
