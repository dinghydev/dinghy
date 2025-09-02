import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.interface;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function BusinessInterface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERFACE_2}
      {...props}
      _style={extendStyle(BUSINESS_INTERFACE_2, props)}
    />
  )
}
