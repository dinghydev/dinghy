import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORXHOME = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxhome;fillColor=#DB9EFF;gradientColor=#712FA2;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function Worxhome(props: DiagramNodeProps) {
  return <Shape {...WORXHOME} {...props} />
}
