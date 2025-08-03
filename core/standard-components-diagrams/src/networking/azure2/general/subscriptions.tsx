import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBSCRIPTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Subscriptions.svg;strokeColor=none;',
  _width: 44,
  _height: 71,
}

export function Subscriptions(props: DiagramNodeProps) {
  return <Shape {...SUBSCRIPTIONS} {...props} />
}
