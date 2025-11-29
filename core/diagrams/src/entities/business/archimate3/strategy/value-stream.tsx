import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VALUE_STREAM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=valueStream;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function ValueStream(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VALUE_STREAM)} />
}
