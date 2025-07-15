import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STOREFRONT_SERVICES = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.storefront_services;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 76,
  _height: 91,
}

export function StorefrontServices(props: DiagramNodeProps) {
  return <Shape {...STOREFRONT_SERVICES} {...props} />
}
