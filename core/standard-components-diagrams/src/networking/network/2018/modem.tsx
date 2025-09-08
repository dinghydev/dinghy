import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODEM = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.modem;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} _style={extendStyle(MODEM, props)} />
}
