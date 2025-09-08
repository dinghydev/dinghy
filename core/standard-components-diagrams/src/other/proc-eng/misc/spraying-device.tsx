import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPRAYING_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spraying_device;pointerEvents=1;',
  },
  _original_width: 60,
  _original_height: 20,
}

export function SprayingDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRAYING_DEVICE}
      {...props}
      _style={extendStyle(SPRAYING_DEVICE, props)}
    />
  )
}
