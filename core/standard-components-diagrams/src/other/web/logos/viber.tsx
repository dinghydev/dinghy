import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIBER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.viber;fillColor=#7D539F;strokeColor=none',
  _width: 77.4,
  _height: 85.2,
}

export function Viber(props: DiagramNodeProps) {
  return <Shape {...VIBER} {...props} />
}
