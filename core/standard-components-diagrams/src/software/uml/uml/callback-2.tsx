import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALLBACK_2 = {
  _style: {
    entity:
      'html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;exitX=1;exitY=1;exitDx=0;exitDy=-5;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function Callback2(props: DiagramNodeProps) {
  return (
    <Shape {...CALLBACK_2} {...props} _style={extendStyle(CALLBACK_2, props)} />
  )
}
