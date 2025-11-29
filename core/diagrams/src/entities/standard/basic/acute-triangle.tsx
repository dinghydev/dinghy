import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACUTE_TRIANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.acute_triangle;dx=0.5;',
  },
  _width: 100,
  _height: 70,
}

export function AcuteTriangle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACUTE_TRIANGLE)} />
}
