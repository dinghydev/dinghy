import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTDOOR_METERING_DEVICE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.outdoor_metering_device;',
  _width: 100,
  _height: 100,
}

export function OutdoorMeteringDevice(props: DiagramNodeProps) {
  return <Shape {...OUTDOOR_METERING_DEVICE} {...props} />
}
