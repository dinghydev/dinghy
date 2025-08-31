import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;rSize=0;fillColor=#eeeeee;strokeColor=#999999;gradientColor=#cccccc;align=left;spacingLeft=4;fontSize=17;fontColor=#666666;labelPosition=right;',
  },
  _width: 15,
  _height: 15,
}

export function Checkbox(props: DiagramNodeProps) {
  return (
    <Shape {...CHECKBOX} {...props} _style={extendStyle(CHECKBOX, props)} />
  )
}
