import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHIME = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.chime;fillColor=#03B5BB;gradientColor=none;',
  _width: 99,
  _height: 99,
}

export function Chime(props: DiagramNodeProps) {
  return <Shape {...CHIME} {...props} />
}
