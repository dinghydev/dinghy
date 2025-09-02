import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANNER_SINGLE_FOLD = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.bannerSingleFold;dx=32;dx2=20;dy=17;notch=15;fillColor=#10739E;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingBottom=15;spacingLeft=25;',
  },
  _original_width: 260,
  _original_height: 70,
}

export function BannerSingleFold(props: DiagramNodeProps) {
  return (
    <Shape
      {...BANNER_SINGLE_FOLD}
      {...props}
      _style={extendStyle(BANNER_SINGLE_FOLD, props)}
    />
  )
}
