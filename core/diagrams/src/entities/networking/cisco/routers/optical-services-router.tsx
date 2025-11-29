import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTICAL_SERVICES_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.optical_services_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 64,
}

export function OpticalServicesRouter(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, OPTICAL_SERVICES_ROUTER)} />
  )
}
