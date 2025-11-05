import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXISTING_ENTERPRISE_SYSTEMS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/existing_enterprise_systems.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ExistingEnterpriseSystems(props: NodeProps) {
  return (
    <Shape
      {...EXISTING_ENTERPRISE_SYSTEMS}
      {...props}
      _style={extendStyle(EXISTING_ENTERPRISE_SYSTEMS, props)}
    />
  )
}
