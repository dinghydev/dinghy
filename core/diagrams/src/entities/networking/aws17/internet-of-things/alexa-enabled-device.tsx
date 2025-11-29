import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALEXA_ENABLED_DEVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_enabled_device;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function AlexaEnabledDevice(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALEXA_ENABLED_DEVICE)} />
}
