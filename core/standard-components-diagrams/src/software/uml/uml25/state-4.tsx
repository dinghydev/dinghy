import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_4 = {
  _style:
    'shape=folder;align=center;verticalAlign=middle;fontStyle=0;tabWidth=100;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;labelInHeader=1;rounded=1;absoluteArcSize=1;arcSize=10;whiteSpace=wrap;',
  _width: 140,
  _height: 90,
}

export function State4(props: DiagramNodeProps) {
  return <Shape {...STATE_4} {...props} _style={extendStyle(STATE_4, props)} />
}
