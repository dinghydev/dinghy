import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRAAS_ENHANCEMENTS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.draas_enhancements;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function DraasEnhancements(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRAAS_ENHANCEMENTS}
      {...props}
      _style={extendStyle(DRAAS_ENHANCEMENTS, props)}
    />
  )
}
