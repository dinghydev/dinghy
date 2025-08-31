import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_NETWORK_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Network_Classic.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 28.000000000000004,
}

export function VirtualNetworkClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_NETWORK_CLASSIC}
      {...props}
      _style={extendStyle(VIRTUAL_NETWORK_CLASSIC, props)}
    />
  )
}
