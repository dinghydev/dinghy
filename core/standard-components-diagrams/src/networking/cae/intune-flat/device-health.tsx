import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_HEALTH = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.device_health',
  _width: 50,
  _height: 31,
}

export function DeviceHealth(props: DiagramNodeProps) {
  return <Shape {...DEVICE_HEALTH} {...props} />
}
