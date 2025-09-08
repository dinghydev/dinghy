import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sts;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 61.5,
  _original_height: 34.5,
}

export function Sts(props: DiagramNodeProps) {
  return <Shape {...STS} {...props} _style={extendStyle(STS, props)} />
}
