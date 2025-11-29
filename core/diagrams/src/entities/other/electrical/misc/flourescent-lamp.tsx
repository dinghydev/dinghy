import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOURESCENT_LAMP = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.flourescent_lamp',
  },
  _width: 80,
  _height: 30,
}

export function FlourescentLamp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLOURESCENT_LAMP)} />
}
