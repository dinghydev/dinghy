import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_ROLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.role;',
  },
  _width: 60,
  _height: 35,
}

export function BusinessRole2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_ROLE_2}
      {...props}
      _style={extendStyle(BUSINESS_ROLE_2, props)}
    />
  )
}
