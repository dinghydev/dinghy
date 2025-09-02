import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPERTY_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;strokeWidth=2;',
  },
  _original_width: 160,
  _original_height: 0,
}

export function Property2(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY_2} {...props} _style={extendStyle(PROPERTY_2, props)} />
  )
}
