import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CODEDEPLOY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codedeploy;fillColor=#759C3E;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function Codedeploy(props: DiagramNodeProps) {
  return (
    <Shape {...CODEDEPLOY} {...props} _style={extendStyle(CODEDEPLOY, props)} />
  )
}
