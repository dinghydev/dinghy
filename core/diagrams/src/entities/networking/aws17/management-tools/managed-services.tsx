import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_SERVICES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.managed_services;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ManagedServices(props: NodeProps) {
  return (
    <Shape
      {...MANAGED_SERVICES}
      {...props}
      _style={extendStyle(MANAGED_SERVICES, props)}
    />
  )
}
