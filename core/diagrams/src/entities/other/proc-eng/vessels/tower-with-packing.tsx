import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOWER_WITH_PACKING = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tower_with_packing;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 14,
  _height: 97,
}

export function TowerWithPacking(props: NodeProps) {
  return (
    <Shape
      {...TOWER_WITH_PACKING}
      {...props}
      _style={extendStyle(TOWER_WITH_PACKING, props)}
    />
  )
}
