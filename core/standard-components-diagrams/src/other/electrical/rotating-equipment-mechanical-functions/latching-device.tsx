import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LATCHING_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.latching_device;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 22,
}

export function LatchingDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...LATCHING_DEVICE}
      {...props}
      _style={extendStyle(LATCHING_DEVICE, props)}
    />
  )
}
