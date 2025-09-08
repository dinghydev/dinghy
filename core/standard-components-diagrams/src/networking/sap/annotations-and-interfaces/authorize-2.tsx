import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTHORIZE_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#470bed;strokeWidth=1.5;',
  },
  _original_width: 1,
  _original_height: 16,
}

export function Authorize2(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHORIZE_2}
      {...props}
      _style={extendStyle(AUTHORIZE_2, props)}
    />
  )
}
