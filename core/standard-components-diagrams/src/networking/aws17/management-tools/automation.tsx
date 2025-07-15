import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMATION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.automation;fillColor=#759C3E;gradientColor=none;',
  _width: 78,
  _height: 81,
}

export function Automation(props: DiagramNodeProps) {
  return <Shape {...AUTOMATION} {...props} />
}
