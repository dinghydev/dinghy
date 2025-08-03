import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBSCRIPTIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Key.svg;strokeColor=none;',
  _width: 31,
  _height: 50,
}

export function Subscriptions(props: DiagramNodeProps) {
  return <Shape {...SUBSCRIPTIONS} {...props} />
}
