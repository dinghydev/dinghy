import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPIER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.copier;',
  },
  _width: 60,
  _height: 60,
}

export function Copier(props: DiagramNodeProps) {
  return <Shape {...COPIER} {...props} _style={extendStyle(COPIER, props)} />
}
