import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_CERTIFICATE_PROFILES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_certificate_profiles',
  _width: 40,
  _height: 50,
}

export function IntuneCertificateProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_CERTIFICATE_PROFILES}
      {...props}
      _style={extendStyle(INTUNE_CERTIFICATE_PROFILES, props)}
    />
  )
}
