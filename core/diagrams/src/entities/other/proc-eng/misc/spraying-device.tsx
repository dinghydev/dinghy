import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRAYING_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spraying_device;pointerEvents=1;',
  },
  _width: 60,
  _height: 20,
}

export function SprayingDevice(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRAYING_DEVICE)} />
}
