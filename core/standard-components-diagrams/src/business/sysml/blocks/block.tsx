import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BLOCK = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _original_width: 0,
  _original_height: 340,
}

export function Block(props: DiagramNodeProps) {
  return <Shape {...BLOCK} {...props} _style={extendStyle(BLOCK, props)} />
}
