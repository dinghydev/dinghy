import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOUBLE_DIODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.double_diode;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function DoubleDiode(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_DIODE}
      {...props}
      _style={extendStyle(DOUBLE_DIODE, props)}
    />
  )
}
