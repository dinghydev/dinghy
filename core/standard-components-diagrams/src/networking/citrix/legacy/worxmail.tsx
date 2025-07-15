import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORXMAIL = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxmail;fillColor=#112356;gradientColor=#63AFC6;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function Worxmail(props: DiagramNodeProps) {
  return <Shape {...WORXMAIL} {...props} />
}
