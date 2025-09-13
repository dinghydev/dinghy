import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODEM = {
  _style: {
    entity:
      'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.modem;network2IconYOffset=0.0131;network2IconW=1;network2IconH=0.2938;',
  },
  _width: 50,
  _height: 14.69,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} _style={extendStyle(MODEM, props)} />
}
