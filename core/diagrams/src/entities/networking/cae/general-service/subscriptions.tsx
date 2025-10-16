import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUBSCRIPTIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Key.svg;strokeColor=none;',
  },
  _width: 31,
  _height: 50,
}

export function Subscriptions(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBSCRIPTIONS}
      {...props}
      _style={extendStyle(SUBSCRIPTIONS, props)}
    />
  )
}
