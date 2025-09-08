import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _original_width: 0,
  _original_height: 161,
}

export function Component(props: DiagramNodeProps) {
  return (
    <Shape {...COMPONENT} {...props} _style={extendStyle(COMPONENT, props)} />
  )
}
