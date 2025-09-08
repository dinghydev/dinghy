import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STOREFRONT_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.storefront_services;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 76,
  _original_height: 91,
}

export function StorefrontServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...STOREFRONT_SERVICES}
      {...props}
      _style={extendStyle(STOREFRONT_SERVICES, props)}
    />
  )
}
