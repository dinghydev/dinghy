import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUSTED_ADVISOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.trusted_advisor;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function TrustedAdvisor(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUSTED_ADVISOR}
      {...props}
      _style={extendStyle(TRUSTED_ADVISOR, props)}
    />
  )
}
