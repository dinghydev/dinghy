import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLACIER_FLEXIBLE_RETRIEVAL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.glacier;',
  },
  _width: 75,
  _height: 78,
}

export function GlacierFlexibleRetrieval(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLACIER_FLEXIBLE_RETRIEVAL}
      {...props}
      _style={extendStyle(GLACIER_FLEXIBLE_RETRIEVAL, props)}
    />
  )
}
