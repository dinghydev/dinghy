import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FULL_MS_INTEGRATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.full_ms_integration;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function FullMsIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_MS_INTEGRATION}
      {...props}
      _style={extendStyle(FULL_MS_INTEGRATION, props)}
    />
  )
}
