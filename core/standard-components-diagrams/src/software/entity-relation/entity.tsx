import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTITY = {
  _style:
    'swimlane;childLayout=stackLayout;horizontal=1;startSize=50;horizontalStack=0;rounded=1;fontSize=14;fontStyle=0;strokeWidth=2;resizeParent=0;resizeLast=1;shadow=0;dashed=0;align=center;arcSize=4;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 120,
}

export function Entity(props: DiagramNodeProps) {
  return <Shape {...ENTITY} {...props} _style={extendStyle(ENTITY, props)} />
}
