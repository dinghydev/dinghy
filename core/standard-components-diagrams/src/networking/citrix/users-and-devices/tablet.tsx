import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLET = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.tablet;',
  _width: 36.925000000000004,
  _height: 50,
}

export function Tablet(props: DiagramNodeProps) {
  return <Shape {...TABLET} {...props} />
}
