import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IAM = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.iam;',
  _width: 37.5,
  _height: 47,
}

export function Iam(props: DiagramNodeProps) {
  return <Shape {...IAM} {...props} />
}
