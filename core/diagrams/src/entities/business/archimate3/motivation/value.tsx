import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VALUE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=amValue;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Value(props: NodeProps) {
  return <Shape {...VALUE} {...props} _style={extendStyle(VALUE, props)} />
}
