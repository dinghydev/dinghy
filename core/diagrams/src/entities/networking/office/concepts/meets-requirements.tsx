import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEETS_REQUIREMENTS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.meets_requirements;',
  },
  _original_width: 56,
  _original_height: 53,
}

export function MeetsRequirements(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEETS_REQUIREMENTS}
      {...props}
      _style={extendStyle(MEETS_REQUIREMENTS, props)}
    />
  )
}
