import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORGANIZATIONS_ORGANIZATIONAL_UNIT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.organizations_organizational_unit;',
  },
  _original_width: 78,
  _original_height: 67,
}

export function OrganizationsOrganizationalUnit(props: NodeProps) {
  return (
    <Shape
      {...ORGANIZATIONS_ORGANIZATIONAL_UNIT}
      {...props}
      _style={extendStyle(ORGANIZATIONS_ORGANIZATIONAL_UNIT, props)}
    />
  )
}
