import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.firewall;',
  _width: 75,
  _height: 93,
}

export function Firewall(props: DiagramNodeProps) {
  return <Shape {...FIREWALL} {...props} />
}
