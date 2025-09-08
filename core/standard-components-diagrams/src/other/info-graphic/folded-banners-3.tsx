import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLDED_BANNERS_3 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.bannerHalfFold;dx=40;dx2=20;notch=15;fillColor=#23445D;strokeColor=none;align=left;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingLeft=25;spacingTop=5;',
  },
  _original_width: 3,
  _original_height: 360,
}

export function FoldedBanners3(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDED_BANNERS_3}
      {...props}
      _style={extendStyle(FOLDED_BANNERS_3, props)}
    />
  )
}
