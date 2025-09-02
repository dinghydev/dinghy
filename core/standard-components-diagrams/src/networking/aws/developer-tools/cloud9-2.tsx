import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD9_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.cloud9;',
  },
  _original_width: 78,
  _original_height: 50,
}

export function Cloud92(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD9_2} {...props} _style={extendStyle(CLOUD9_2, props)} />
  )
}
