import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=interface2',
  },
  _original_width: 100,
  _original_height: 75,
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
