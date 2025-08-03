import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOM_IP_PREFIX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Custom_IP_Prefix.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CustomIpPrefix(props: DiagramNodeProps) {
  return <Shape {...CUSTOM_IP_PREFIX} {...props} />
}
