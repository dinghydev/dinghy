import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_OBJECT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.businessObject;overflow=fill',
  },
  _original_width: 100,
  _original_height: 75,
}

export function BusinessObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_OBJECT}
      {...props}
      _style={extendStyle(BUSINESS_OBJECT, props)}
    />
  )
}
