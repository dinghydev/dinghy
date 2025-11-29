import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_OBJECT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=passive;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function DataObject(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_OBJECT)} />
}
