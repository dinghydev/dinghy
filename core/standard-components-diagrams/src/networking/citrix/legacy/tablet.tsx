import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLET = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tablet_1;',
  _width: 61,
  _height: 79,
}

export function Tablet(props: DiagramNodeProps) {
  return <Shape {...TABLET} {...props} />
}
