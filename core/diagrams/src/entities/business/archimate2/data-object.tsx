import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_OBJECT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.businessObject;overflow=fill',
  },
  _width: 100,
  _height: 75,
}

export function DataObject(props: NodeProps) {
  return (
    <Shape
      {...DATA_OBJECT}
      {...props}
      _style={extendStyle(DATA_OBJECT, props)}
    />
  )
}
