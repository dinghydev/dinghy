import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RIBBON = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=20;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;',
  _width: 200,
  _height: 40,
}

export function Ribbon(props: DiagramNodeProps) {
  return <Shape {...RIBBON} {...props} />
}
