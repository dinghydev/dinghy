import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_DEPLOYMENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.virtual_deployment;',
  _width: 50,
  _height: 44.5,
}

export function VirtualDeployment(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_DEPLOYMENT} {...props} />
}
