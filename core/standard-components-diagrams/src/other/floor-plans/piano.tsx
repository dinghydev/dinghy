import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIANO = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.piano;',
  _width: 135,
  _height: 143,
}

export function Piano(props: DiagramNodeProps) {
  return <Shape {...PIANO} {...props} />
}
