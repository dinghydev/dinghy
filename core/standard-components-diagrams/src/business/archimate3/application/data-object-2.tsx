import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_OBJECT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.businessObject;overflow=fill;',
  },
  _original_width: 70,
  _original_height: 40,
}

export function DataObject2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OBJECT_2}
      {...props}
      _style={extendStyle(DATA_OBJECT_2, props)}
    />
  )
}
