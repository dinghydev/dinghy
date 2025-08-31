import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORM_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=2;fillColor=#EDEDED;strokeColor=#999999;align=left;fontSize=14;fontColor=#000000;labelPosition=right;verticalLabelPosition=middle;verticalAlign=middle;spacingLeft=5;spacingTop=-2;gradientColor=#DEDEDE;',
  },
  _width: 5,
  _height: 500,
}

export function Form4(props: DiagramNodeProps) {
  return <Shape {...FORM_4} {...props} _style={extendStyle(FORM_4, props)} />
}
