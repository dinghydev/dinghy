import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEST_POINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.testPoint;',
  },
  _width: 60,
  _height: 130,
}

export function TestPoint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEST_POINT)} />
}
