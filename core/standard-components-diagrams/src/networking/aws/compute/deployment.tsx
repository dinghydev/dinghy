import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEPLOYMENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.deployment;',
  },
  _width: 48,
  _height: 46,
}

export function Deployment(props: DiagramNodeProps) {
  return (
    <Shape {...DEPLOYMENT} {...props} _style={extendStyle(DEPLOYMENT, props)} />
  )
}
