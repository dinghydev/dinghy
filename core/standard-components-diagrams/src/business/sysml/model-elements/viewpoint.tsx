import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIEWPOINT = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _width: 0,
  _height: 160,
}

export function Viewpoint(props: DiagramNodeProps) {
  return (
    <Shape {...VIEWPOINT} {...props} _style={extendStyle(VIEWPOINT, props)} />
  )
}
