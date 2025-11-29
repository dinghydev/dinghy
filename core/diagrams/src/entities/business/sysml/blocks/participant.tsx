import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTICIPANT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;dashed=1;',
  },
  _width: 0,
  _height: 80,
}

export function Participant(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTICIPANT)} />
}
