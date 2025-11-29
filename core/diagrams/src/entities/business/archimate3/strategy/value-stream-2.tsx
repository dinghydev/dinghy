import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VALUE_STREAM_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.valueStream;',
  },
  _width: 70,
  _height: 35,
}

export function ValueStream2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VALUE_STREAM_2)} />
}
