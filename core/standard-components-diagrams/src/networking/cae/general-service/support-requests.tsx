import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_REQUESTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_Requests.svg;strokeColor=none;',
  _width: 50,
  _height: 46,
}

export function SupportRequests(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_REQUESTS}
      {...props}
      _style={extendStyle(SUPPORT_REQUESTS, props)}
    />
  )
}
