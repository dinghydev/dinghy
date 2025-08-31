import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RUNNING_MAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.running_man;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 83,
  _height: 93,
}

export function RunningMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...RUNNING_MAN}
      {...props}
      _style={extendStyle(RUNNING_MAN, props)}
    />
  )
}
