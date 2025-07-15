import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LICENSE_INSTALLATION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.license_installation',
  _width: 50,
  _height: 43,
}

export function LicenseInstallation(props: DiagramNodeProps) {
  return <Shape {...LICENSE_INSTALLATION} {...props} />
}
