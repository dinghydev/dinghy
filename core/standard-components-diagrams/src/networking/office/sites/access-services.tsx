import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCESS_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.access_services;',
  },
  _width: 59,
  _height: 49,
}

export function AccessServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCESS_SERVICES}
      {...props}
      _style={extendStyle(ACCESS_SERVICES, props)}
    />
  )
}
