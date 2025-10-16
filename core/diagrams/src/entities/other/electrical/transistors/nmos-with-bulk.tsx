import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NMOS_WITH_BULK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.nmos_bulk;pointerEvents=1;',
  },
  _width: 60,
  _height: 100,
}

export function NmosWithBulk(props: DiagramNodeProps) {
  return (
    <Shape
      {...NMOS_WITH_BULK}
      {...props}
      _style={extendStyle(NMOS_WITH_BULK, props)}
    />
  )
}
