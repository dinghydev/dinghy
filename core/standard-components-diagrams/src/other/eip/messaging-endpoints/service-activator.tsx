import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_ACTIVATOR = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.service_activator;',
  },
  _width: 150,
  _height: 90,
}

export function ServiceActivator(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_ACTIVATOR}
      {...props}
      _style={extendStyle(SERVICE_ACTIVATOR, props)}
    />
  )
}
