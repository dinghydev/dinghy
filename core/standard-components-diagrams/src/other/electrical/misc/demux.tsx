import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEMUX = {
  _style:
    'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;operation=demux;whiteSpace=wrap;',
  _width: 80,
  _height: 120,
}

export function Demux(props: DiagramNodeProps) {
  return <Shape {...DEMUX} {...props} />
}
