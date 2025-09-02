import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_PROTOCOL_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#475f75;strokeWidth=1.5;',
  },
  _original_width: 1,
  _original_height: 16,
}

export function GenericProtocol2(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_PROTOCOL_2}
      {...props}
      _style={extendStyle(GENERIC_PROTOCOL_2, props)}
    />
  )
}
