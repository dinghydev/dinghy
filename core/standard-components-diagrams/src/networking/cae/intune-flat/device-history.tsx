import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_HISTORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.device_history',
  _width: 45,
  _height: 50,
}

export function DeviceHistory(props: DiagramNodeProps) {
  return <Shape {...DEVICE_HISTORY} {...props} />
}
