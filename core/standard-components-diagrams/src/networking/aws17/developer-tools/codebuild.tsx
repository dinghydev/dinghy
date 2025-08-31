import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CODEBUILD = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codebuild;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Codebuild(props: DiagramNodeProps) {
  return (
    <Shape {...CODEBUILD} {...props} _style={extendStyle(CODEBUILD, props)} />
  )
}
