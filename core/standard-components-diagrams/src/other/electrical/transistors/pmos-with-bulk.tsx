import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PMOS_WITH_BULK = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pmos_bulk;pointerEvents=1;',
  _width: 60,
  _height: 100,
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
