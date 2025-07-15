import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANGLED_ENTRY = {
  _style:
    'shape=mxgraph.infographic.parallelogram;dx=5;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;',
  _width: 0,
  _height: 30,
}

export function AngledEntry(props: DiagramNodeProps) {
  return <Shape {...ANGLED_ENTRY} {...props} />
}
