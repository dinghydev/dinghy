import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINTENANCE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.maintenance',
  _width: 39,
  _height: 50,
}

export function Maintenance(props: DiagramNodeProps) {
  return <Shape {...MAINTENANCE} {...props} />
}
