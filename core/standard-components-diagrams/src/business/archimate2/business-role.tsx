import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_ROLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=role',
  },
  _original_width: 100,
  _original_height: 75,
}

export function BusinessRole(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_ROLE}
      {...props}
      _style={extendStyle(BUSINESS_ROLE, props)}
    />
  )
}
