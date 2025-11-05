import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _width: 0,
  _height: 161,
}

export function Component(props: NodeProps) {
  return (
    <Shape {...COMPONENT} {...props} _style={extendStyle(COMPONENT, props)} />
  )
}
