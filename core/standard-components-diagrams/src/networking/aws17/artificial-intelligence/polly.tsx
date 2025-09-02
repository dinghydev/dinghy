import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLLY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.polly;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Polly(props: DiagramNodeProps) {
  return <Shape {...POLLY} {...props} _style={extendStyle(POLLY, props)} />
}
