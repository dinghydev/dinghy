import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUSTOM_INPUT_GROUP_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#7D868C;align=left;spacing=15;spacingLeft=80;fontSize=14;',
  },
  _width: 0,
  _height: 40,
}

export function CustomInputGroup3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOM_INPUT_GROUP_3}
      {...props}
      _style={extendStyle(CUSTOM_INPUT_GROUP_3, props)}
    />
  )
}
