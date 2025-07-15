import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SNAPSHOT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.snapshot;',
  _width: 55.6,
  _height: 48.8,
}

export function Snapshot(props: DiagramNodeProps) {
  return <Shape {...SNAPSHOT} {...props} />
}
