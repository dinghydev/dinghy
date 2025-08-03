import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const API_PROXY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/API_Proxy.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ApiProxy(props: DiagramNodeProps) {
  return <Shape {...API_PROXY} {...props} />
}
