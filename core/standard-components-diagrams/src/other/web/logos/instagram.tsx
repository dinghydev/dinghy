import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTAGRAM = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instagram;fillColor=#6FC0E4;gradientColor=#1E305B',
  _width: 72.2,
  _height: 72.2,
}

export function Instagram(props: DiagramNodeProps) {
  return <Shape {...INSTAGRAM} {...props} />
}
