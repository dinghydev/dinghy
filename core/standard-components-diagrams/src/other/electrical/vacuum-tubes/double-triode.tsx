import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOUBLE_TRIODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.double_triode;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function DoubleTriode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_TRIODE}
      {...props}
      _style={extendStyle(DOUBLE_TRIODE, props)}
    />
  )
}
