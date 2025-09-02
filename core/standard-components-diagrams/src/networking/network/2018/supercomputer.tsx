import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPERCOMPUTER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.supercomputer;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Supercomputer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPERCOMPUTER}
      {...props}
      _style={extendStyle(SUPERCOMPUTER, props)}
    />
  )
}
