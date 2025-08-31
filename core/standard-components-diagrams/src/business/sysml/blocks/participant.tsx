import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;dashed=1;',
  },
  _width: 0,
  _height: 80,
}

export function Participant(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTICIPANT}
      {...props}
      _style={extendStyle(PARTICIPANT, props)}
    />
  )
}
