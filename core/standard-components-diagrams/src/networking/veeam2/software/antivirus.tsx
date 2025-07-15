import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTIVIRUS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.antivirus;',
  _width: 34,
  _height: 34,
}

export function Antivirus(props: DiagramNodeProps) {
  return <Shape {...ANTIVIRUS} {...props} />
}
