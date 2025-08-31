import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHADOW_TESTING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sagemaker_shadow_testing;',
  },
  _width: 60,
  _height: 60,
}

export function ShadowTesting(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHADOW_TESTING}
      {...props}
      _style={extendStyle(SHADOW_TESTING, props)}
    />
  )
}
