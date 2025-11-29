import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLACIER_FLEXIBLE_RETRIEVAL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.glacier;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function GlacierFlexibleRetrieval(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, GLACIER_FLEXIBLE_RETRIEVAL)} />
  )
}
