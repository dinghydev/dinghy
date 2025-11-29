import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_MARQUEE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Marquee.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 40.8,
}

export function DefenderMarquee(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEFENDER_MARQUEE)} />
}
