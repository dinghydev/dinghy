import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BANNER_SINGLE_FOLD = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.bannerSingleFold;dx=32;dx2=20;dy=17;notch=15;fillColor=#10739E;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingBottom=15;spacingLeft=25;',
  },
  _width: 260,
  _height: 70,
}

export function BannerSingleFold(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BANNER_SINGLE_FOLD)} />
}
