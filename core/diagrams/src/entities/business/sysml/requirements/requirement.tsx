import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIREMENT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _width: 0,
  _height: 100,
}

export function Requirement(props: NodeProps) {
  return (
    <Shape
      {...REQUIREMENT}
      {...props}
      _style={extendStyle(REQUIREMENT, props)}
    />
  )
}
