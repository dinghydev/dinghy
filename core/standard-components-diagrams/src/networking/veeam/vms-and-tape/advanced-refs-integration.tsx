import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADVANCED_REFS_INTEGRATION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.advanced_refs_integration;',
  _width: 44.8,
  _height: 44.8,
}

export function AdvancedRefsIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADVANCED_REFS_INTEGRATION}
      {...props}
      _style={extendStyle(ADVANCED_REFS_INTEGRATION, props)}
    />
  )
}
