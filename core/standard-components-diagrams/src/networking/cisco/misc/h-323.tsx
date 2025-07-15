import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const H_323 = {
  _style:
    'shape=mxgraph.cisco.misc.h_323;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 51,
  _height: 51,
}

export function H323(props: DiagramNodeProps) {
  return <Shape {...H_323} {...props} />
}
