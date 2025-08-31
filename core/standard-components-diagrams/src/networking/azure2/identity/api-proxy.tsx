import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_PROXY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/API_Proxy.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ApiProxy(props: DiagramNodeProps) {
  return (
    <Shape {...API_PROXY} {...props} _style={extendStyle(API_PROXY, props)} />
  )
}
