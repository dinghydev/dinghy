import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BASIC_INPUT_GROUP_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=none;fontColor=#212529;align=left;spacingLeft=0;fontSize=14;',
  },
  _original_width: 2,
  _original_height: 330,
}

export function BasicInputGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BASIC_INPUT_GROUP_2}
      {...props}
      _style={extendStyle(BASIC_INPUT_GROUP_2, props)}
    />
  )
}
