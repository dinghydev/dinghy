import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFRASTRUCTURE_ROLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.administrator;fillColor=#066A90;',
  _width: 21.5,
  _height: 50,
}

export function InfrastructureRole(props: DiagramNodeProps) {
  return <Shape {...INFRASTRUCTURE_ROLE} {...props} />
}
