import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PMOS_WITH_BULK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pmos_bulk;pointerEvents=1;',
  },
  _width: 60,
  _height: 100,
}

export function PmosWithBulk(props: NodeProps) {
  return (
    <Shape
      {...PMOS_WITH_BULK}
      {...props}
      _style={extendStyle(PMOS_WITH_BULK, props)}
    />
  )
}
