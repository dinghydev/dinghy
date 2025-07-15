import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CODEPIPELINE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.codepipeline;fillColor=#759C3E;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function Codepipeline(props: DiagramNodeProps) {
  return <Shape {...CODEPIPELINE} {...props} />
}
