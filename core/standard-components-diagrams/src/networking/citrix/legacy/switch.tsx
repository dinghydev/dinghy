import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.switch;',
  _width: 92,
  _height: 41.5,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} />
}
