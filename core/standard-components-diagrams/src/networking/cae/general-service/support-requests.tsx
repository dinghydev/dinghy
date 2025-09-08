import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUPPORT_REQUESTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_Requests.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
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
