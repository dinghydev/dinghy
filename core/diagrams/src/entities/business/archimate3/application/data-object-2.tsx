import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_OBJECT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.businessObject;overflow=fill;',
  },
  _width: 70,
  _height: 40,
}

export function DataObject2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_OBJECT_2)} />
}
