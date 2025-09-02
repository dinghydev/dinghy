import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFRASTRUCTURE_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.business;busType=function',
  },
  _original_width: 100,
  _original_height: 75,
}

export function InfrastructureFunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_FUNCTION}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_FUNCTION, props)}
    />
  )
}
