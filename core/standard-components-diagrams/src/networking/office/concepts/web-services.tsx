import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_SERVICES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.web_services;',
  _width: 60,
  _height: 56,
}

export function WebServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_SERVICES}
      {...props}
      _style={extendStyle(WEB_SERVICES, props)}
    />
  )
}
