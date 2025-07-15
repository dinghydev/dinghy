import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_REQUESTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_Requests.svg;',
  _width: 50,
  _height: 46,
}

export function SupportRequests(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_REQUESTS} {...props} />
}
