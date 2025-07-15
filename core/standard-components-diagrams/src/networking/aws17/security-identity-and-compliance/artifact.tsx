import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARTIFACT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.artifact;fillColor=#759C3E;gradientColor=none;',
  _width: 75,
  _height: 90,
}

export function Artifact(props: DiagramNodeProps) {
  return <Shape {...ARTIFACT} {...props} />
}
