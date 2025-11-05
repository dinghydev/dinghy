import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STS_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sts_alternate;',
  },
  _original_width: 62,
  _original_height: 78,
}

export function Sts2(props: NodeProps) {
  return <Shape {...STS_2} {...props} _style={extendStyle(STS_2, props)} />
}
