import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LICENSE_INSTALLATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.license_installation',
  },
  _original_width: 50,
  _original_height: 43,
}

export function LicenseInstallation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LICENSE_INSTALLATION)} />
}
