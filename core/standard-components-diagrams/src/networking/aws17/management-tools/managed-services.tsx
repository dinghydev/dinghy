import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_SERVICES = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.managed_services;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function ManagedServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_SERVICES}
      {...props}
      _style={extendStyle(MANAGED_SERVICES, props)}
    />
  )
}
