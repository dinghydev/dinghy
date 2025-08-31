import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SDK = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.external_sdk;',
  _width: 68,
  _height: 78,
}

export function Sdk(props: DiagramNodeProps) {
  return <Shape {...SDK} {...props} _style={extendStyle(SDK, props)} />
}
