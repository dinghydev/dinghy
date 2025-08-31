import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIVERSITY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.university;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 133,
  _height: 53,
}

export function University(props: DiagramNodeProps) {
  return (
    <Shape {...UNIVERSITY} {...props} _style={extendStyle(UNIVERSITY, props)} />
  )
}
