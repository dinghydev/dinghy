import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ise;',
  _width: 24.5,
  _height: 34.5,
}

export function Ise(props: DiagramNodeProps) {
  return <Shape {...ISE} {...props} />
}
