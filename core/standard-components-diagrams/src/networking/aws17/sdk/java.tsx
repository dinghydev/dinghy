import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JAVA = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#EE472A;gradientColor=none;',
  _width: 73.5,
  _height: 84,
}

export function Java(props: DiagramNodeProps) {
  return <Shape {...JAVA} {...props} />
}
