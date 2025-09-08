import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERIC_PROTOCOL_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#475f75;strokeWidth=1.5;exitX=1.015;exitY=0.505;exitDx=0;exitDy=0;exitPerimeter=0;endFill=1;endSize=4;startSize=4;',
  },
  _original_width: 2,
  _original_height: 16,
}

export function GenericProtocol3(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_PROTOCOL_3}
      {...props}
      _style={extendStyle(GENERIC_PROTOCOL_3, props)}
    />
  )
}
