import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRUS = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.virus;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Virus(props: DiagramNodeProps) {
  return <Shape {...VIRUS} {...props} _style={extendStyle(VIRUS, props)} />
}
