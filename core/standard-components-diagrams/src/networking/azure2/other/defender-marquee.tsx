import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_MARQUEE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Marquee.svg;strokeColor=none;',
  _width: 68,
  _height: 40.8,
}

export function DefenderMarquee(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_MARQUEE}
      {...props}
      _style={extendStyle(DEFENDER_MARQUEE, props)}
    />
  )
}
