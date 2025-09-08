import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PMOS_WITH_BULK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pmos_bulk;pointerEvents=1;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function PmosWithBulk(props: DiagramNodeProps) {
  return (
    <Shape
      {...PMOS_WITH_BULK}
      {...props}
      _style={extendStyle(PMOS_WITH_BULK, props)}
    />
  )
}
