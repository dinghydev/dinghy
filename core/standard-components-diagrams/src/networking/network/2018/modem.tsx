import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODEM = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.modem;',
  },
  _width: 100,
  _height: 30,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} _style={extendStyle(MODEM, props)} />
}
