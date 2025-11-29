import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT = {
  _style: {
    entity:
      'endArrow=oval;html=1;fontSize=16;fontColor=#10739E;endFill=0;endSize=24;strokeWidth=5;labelBackgroundColor=none;verticalAlign=top;fontStyle=1;strokeColor=#10739E;',
  },
  _width: 0,
  _height: 100,
}

export function Callout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALLOUT)} />
}
