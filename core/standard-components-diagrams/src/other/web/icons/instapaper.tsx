import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTAPAPER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.instapaper;fillColor=#807E7E;gradientColor=#1B1C1C',
  _width: 102.4,
  _height: 102.4,
}

export function Instapaper(props: DiagramNodeProps) {
  return <Shape {...INSTAPAPER} {...props} />
}
