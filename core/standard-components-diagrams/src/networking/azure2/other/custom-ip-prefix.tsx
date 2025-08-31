import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOM_IP_PREFIX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Custom_IP_Prefix.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CustomIpPrefix(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOM_IP_PREFIX}
      {...props}
      _style={extendStyle(CUSTOM_IP_PREFIX, props)}
    />
  )
}
