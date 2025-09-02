import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCANNER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.scanner;',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Scanner(props: DiagramNodeProps) {
  return <Shape {...SCANNER} {...props} _style={extendStyle(SCANNER, props)} />
}
