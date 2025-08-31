import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_EMAIL_PROFILES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_email_profiles',
  _width: 60,
  _height: 60,
}

export function IntuneEmailProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_EMAIL_PROFILES}
      {...props}
      _style={extendStyle(INTUNE_EMAIL_PROFILES, props)}
    />
  )
}
