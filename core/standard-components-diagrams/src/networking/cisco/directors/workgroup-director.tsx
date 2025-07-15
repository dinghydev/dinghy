import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKGROUP_DIRECTOR = {
  _style:
    'shape=mxgraph.cisco.directors.workgroup_director;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 83,
  _height: 67,
}

export function WorkgroupDirector(props: DiagramNodeProps) {
  return <Shape {...WORKGROUP_DIRECTOR} {...props} />
}
