import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_4 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.internet_alt22;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Internet4(props: DiagramNodeProps) {
  return (
    <Shape {...INTERNET_4} {...props} _style={extendStyle(INTERNET_4, props)} />
  )
}
