import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOWER_WITH_PACKING = {
  _style:
    'shape=mxgraph.pid.vessels.tower_with_packing;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 14,
  _height: 97,
}

export function TowerWithPacking(props: DiagramNodeProps) {
  return <Shape {...TOWER_WITH_PACKING} {...props} />
}
