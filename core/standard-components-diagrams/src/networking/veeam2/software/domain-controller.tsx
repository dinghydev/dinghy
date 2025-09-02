import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.domain_controller;',
  },
  _original_width: 40,
  _original_height: 52,
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
