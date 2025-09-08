import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIREMENT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function Requirement(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT}
      {...props}
      _style={extendStyle(REQUIREMENT, props)}
    />
  )
}
