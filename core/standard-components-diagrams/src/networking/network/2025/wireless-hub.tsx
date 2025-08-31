import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_HUB = {
  _style:
    'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.wireless_hub;network2IconYOffset=-0.1142;network2IconW=1;network2IconH=0.5485;',
  _width: 50,
  _height: 27.425,
}

export function WirelessHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_HUB}
      {...props}
      _style={extendStyle(WIRELESS_HUB, props)}
    />
  )
}
