import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINEAR_DISCUSSION = {
  _style: {
    entity:
      'shape=mxgraph.ios7.icons.user;fillColor=#ffffff;strokeColor=#253858;fontSize=12;align=left;fontColor=#000000;labelPosition=right;html=1;verticalAlign=top;spacingTop=-10;spacingLeft=5',
  },
  _original_width: 470,
  _original_height: 125,
}

export function LinearDiscussion(props: DiagramNodeProps) {
  return (
    <Shape
      {...LINEAR_DISCUSSION}
      {...props}
      _style={extendStyle(LINEAR_DISCUSSION, props)}
    />
  )
}
