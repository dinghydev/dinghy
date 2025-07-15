import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NGIPS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ngips;',
  _width: 35.5,
  _height: 42.5,
}

export function Ngips(props: DiagramNodeProps) {
  return <Shape {...NGIPS} {...props} />
}
