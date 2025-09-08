import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RUNNING_MAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.running_man;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 83,
  _original_height: 93,
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
