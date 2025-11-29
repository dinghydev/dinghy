import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOUND_MESSAGE_3 = {
  _style: {
    entity:
      'html=1;verticalAlign=bottom;startArrow=oval;endArrow=block;startSize=8;curved=0;rounded=0;entryX=0;entryY=0;entryDx=0;entryDy=5;',
  },
  _width: 1,
  _height: 80,
}

export function FoundMessage3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FOUND_MESSAGE_3)} />
}
