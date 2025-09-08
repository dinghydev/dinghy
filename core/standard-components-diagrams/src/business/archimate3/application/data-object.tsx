import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_OBJECT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=passive;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function DataObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OBJECT}
      {...props}
      _style={extendStyle(DATA_OBJECT, props)}
    />
  )
}
