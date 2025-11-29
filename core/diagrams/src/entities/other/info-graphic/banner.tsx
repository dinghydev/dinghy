import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BANNER = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.banner;dx=32;dy=17;notch=15;fillColor=#10739E;strokeColor=none;align=center;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingBottom=15;',
  },
  _width: 260,
  _height: 70,
}

export function Banner(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BANNER)} />
}
