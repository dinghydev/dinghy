import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOMAIN_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.domain_controller',
  },
  _original_width: 36,
  _original_height: 50,
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
