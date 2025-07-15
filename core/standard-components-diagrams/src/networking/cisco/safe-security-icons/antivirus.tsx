import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTIVIRUS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.antivirus;',
  _width: 50,
  _height: 32.5,
}

export function Antivirus(props: DiagramNodeProps) {
  return <Shape {...ANTIVIRUS} {...props} />
}
