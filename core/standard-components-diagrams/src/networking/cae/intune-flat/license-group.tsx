import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LICENSE_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.license_group',
  },
  _original_width: 50,
  _original_height: 49,
}

export function LicenseGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...LICENSE_GROUP}
      {...props}
      _style={extendStyle(LICENSE_GROUP, props)}
    />
  )
}
