import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_PROTECTION = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.api_protection;',
  },
  _original_width: 50,
  _original_height: 45.885,
}

export function ApiProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_PROTECTION}
      {...props}
      _style={extendStyle(API_PROTECTION, props)}
    />
  )
}
