import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_STOREFRONT_SERVICES = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_storefront_services;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function RoleStorefrontServices(props: DiagramNodeProps) {
  return <Shape {...ROLE_STOREFRONT_SERVICES} {...props} />
}
