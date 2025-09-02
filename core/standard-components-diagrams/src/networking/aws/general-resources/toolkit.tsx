import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLKIT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.external_toolkit;',
  },
  _original_width: 68,
  _original_height: 78,
}

export function Toolkit(props: DiagramNodeProps) {
  return <Shape {...TOOLKIT} {...props} _style={extendStyle(TOOLKIT, props)} />
}
