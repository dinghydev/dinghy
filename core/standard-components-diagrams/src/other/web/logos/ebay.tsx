import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EBAY = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ebay',
  _width: 81.2,
  _height: 34.4,
}

export function Ebay(props: DiagramNodeProps) {
  return <Shape {...EBAY} {...props} />
}
