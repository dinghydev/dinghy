import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLE_STOREFRONT_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_storefront_services;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleStorefrontServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_STOREFRONT_SERVICES}
      {...props}
      _style={extendStyle(ROLE_STOREFRONT_SERVICES, props)}
    />
  )
}
