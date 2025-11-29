import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROBABILITY_3 = {
  _style: {
    entity:
      'shape=rhombus;html=1;whiteSpace=wrap;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 350,
  _height: 80,
}

export function Probability3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROBABILITY_3)} />
}
