import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GREENGRASS_STREAM_MANAGER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_greengrass_stream_manager;',
  },
  _original_width: 78,
  _original_height: 60,
}

export function GreengrassStreamManager(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, GREENGRASS_STREAM_MANAGER)} />
  )
}
