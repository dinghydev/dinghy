import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEST_POINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.testPoint;',
  },
  _original_width: 60,
  _original_height: 130,
}

export function TestPoint(props: DiagramNodeProps) {
  return (
    <Shape {...TEST_POINT} {...props} _style={extendStyle(TEST_POINT, props)} />
  )
}
