import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCKING_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.blocking_device;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 15,
}

export function BlockingDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCKING_DEVICE}
      {...props}
      _style={extendStyle(BLOCKING_DEVICE, props)}
    />
  )
}
