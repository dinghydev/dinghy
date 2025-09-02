import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BASIC_INPUT_GROUP = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#7D868C;align=left;spacing=15;spacingLeft=40;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 330,
}

export function BasicInputGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...BASIC_INPUT_GROUP}
      {...props}
      _style={extendStyle(BASIC_INPUT_GROUP, props)}
    />
  )
}
