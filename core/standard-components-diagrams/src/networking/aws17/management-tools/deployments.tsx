import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEPLOYMENTS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.deployments;fillColor=#759C3E;gradientColor=none;',
  _width: 81,
  _height: 76.5,
}

export function Deployments(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEPLOYMENTS}
      {...props}
      _style={extendStyle(DEPLOYMENTS, props)}
    />
  )
}
