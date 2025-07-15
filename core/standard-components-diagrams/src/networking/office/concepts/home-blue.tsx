import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOME_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home;fillColor=#2072B8;',
  _width: 51,
  _height: 50,
}

export function HomeBlue(props: DiagramNodeProps) {
  return <Shape {...HOME_BLUE} {...props} />
}
