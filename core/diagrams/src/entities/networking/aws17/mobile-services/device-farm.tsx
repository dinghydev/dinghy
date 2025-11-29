import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_FARM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.device_farm;fillColor=#AD688B;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function DeviceFarm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE_FARM)} />
}
