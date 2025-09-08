import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTERPRISE_SCALABILITY_ENHANCEMENTS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.enterprise_scalability_enhancements;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function EnterpriseScalabilityEnhancements(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTERPRISE_SCALABILITY_ENHANCEMENTS}
      {...props}
      _style={extendStyle(ENTERPRISE_SCALABILITY_ENHANCEMENTS, props)}
    />
  )
}
