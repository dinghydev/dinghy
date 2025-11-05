import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VALUE_2 = {
  _style: {
    entity: 'shape=ellipse;html=1;whiteSpace=wrap;fillColor=#CCCCFF;',
  },
  _width: 70,
  _height: 35,
}

export function Value2(props: NodeProps) {
  return <Shape {...VALUE_2} {...props} _style={extendStyle(VALUE_2, props)} />
}
