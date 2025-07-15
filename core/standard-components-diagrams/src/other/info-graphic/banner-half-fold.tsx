import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BANNER_HALF_FOLD = {
  _style:
    'html=1;shape=mxgraph.infographic.bannerHalfFold;dx=40;dx2=20;notch=15;fillColor=#10739E;strokeColor=none;align=left;verticalAlign=top;fontColor=#ffffff;fontSize=14;fontStyle=1;spacingLeft=25;spacingTop=5;',
  _width: 200,
  _height: 200,
}

export function BannerHalfFold(props: DiagramNodeProps) {
  return <Shape {...BANNER_HALF_FOLD} {...props} />
}
