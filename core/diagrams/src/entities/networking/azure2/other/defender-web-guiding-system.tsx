import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_WEB_GUIDING_SYSTEM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Web_Guiding_System.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 23.76,
}

export function DefenderWebGuidingSystem(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DEFENDER_WEB_GUIDING_SYSTEM)}
    />
  )
}
