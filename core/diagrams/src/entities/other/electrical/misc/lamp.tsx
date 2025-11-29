import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.lamp',
  },
  _width: 50,
  _height: 100,
}

export function Lamp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAMP)} />
}
