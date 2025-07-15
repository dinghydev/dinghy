import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDDIRECTORY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.clouddirectory;fillColor=#759C3E;gradientColor=none;',
  _width: 102,
  _height: 109.5,
}

export function Clouddirectory(props: DiagramNodeProps) {
  return <Shape {...CLOUDDIRECTORY} {...props} />
}
