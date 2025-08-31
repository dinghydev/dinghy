import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN_CONTROLLER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.domain_controller;',
  _width: 45,
  _height: 55,
}

export function DomainController(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOMAIN_CONTROLLER}
      {...props}
      _style={extendStyle(DOMAIN_CONTROLLER, props)}
    />
  )
}
