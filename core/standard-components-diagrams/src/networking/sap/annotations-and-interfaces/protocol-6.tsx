import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOCOL_6 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#07838f;strokeWidth=1.5;exitX=1.015;exitY=0.505;exitDx=0;exitDy=0;exitPerimeter=0;endFill=1;endSize=4;startSize=4;',
  },
  _original_width: 2,
  _original_height: 16,
}

export function Protocol6(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOCOL_6} {...props} _style={extendStyle(PROTOCOL_6, props)} />
  )
}
