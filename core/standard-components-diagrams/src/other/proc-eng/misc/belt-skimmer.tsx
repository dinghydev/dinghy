import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BELT_SKIMMER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.belt_skimmer;',
  _width: 70,
  _height: 98,
}

export function BeltSkimmer(props: DiagramNodeProps) {
  return <Shape {...BELT_SKIMMER} {...props} />
}
