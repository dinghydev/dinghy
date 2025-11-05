import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARDUINO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.arduino;fillColor=#36868D;strokeColor=none',
  },
  _width: 67.4,
  _height: 32,
}

export function Arduino(props: NodeProps) {
  return <Shape {...ARDUINO} {...props} _style={extendStyle(ARDUINO, props)} />
}
