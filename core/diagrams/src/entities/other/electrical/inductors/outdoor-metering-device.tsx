import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OUTDOOR_METERING_DEVICE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.outdoor_metering_device;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function OutdoorMeteringDevice(props: NodeProps) {
  return (
    <Shape
      {...OUTDOOR_METERING_DEVICE}
      {...props}
      _style={extendStyle(OUTDOOR_METERING_DEVICE, props)}
    />
  )
}
