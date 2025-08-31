import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTED_STORE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ConnectedStore.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ConnectedStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONNECTED_STORE}
      {...props}
      _style={extendStyle(CONNECTED_STORE, props)}
    />
  )
}
