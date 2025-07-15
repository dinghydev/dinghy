import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LATCHING_DEVICE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.latching_device;pointerEvents=1;',
  _width: 100,
  _height: 22,
}

export function LatchingDevice(props: DiagramNodeProps) {
  return <Shape {...LATCHING_DEVICE} {...props} />
}
