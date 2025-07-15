import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMP = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.amp;',
  _width: 50,
  _height: 50,
}

export function Amp(props: DiagramNodeProps) {
  return <Shape {...AMP} {...props} />
}
