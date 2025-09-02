import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDED_BANNERS_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.bannerHalfFold;dx=40;dx2=20;notch=15;fillColor=#AE4132;strokeColor=none;align=left;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingLeft=25;spacingTop=5;',
  },
  _original_width: 2,
  _original_height: 360,
}

export function FoldedBanners2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDED_BANNERS_2}
      {...props}
      _style={extendStyle(FOLDED_BANNERS_2, props)}
    />
  )
}
