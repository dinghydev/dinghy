import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTUNE_VPN_PROFILES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_vpn_profiles',
  },
  _original_width: 42,
  _original_height: 50,
}

export function IntuneVpnProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_VPN_PROFILES}
      {...props}
      _style={extendStyle(INTUNE_VPN_PROFILES, props)}
    />
  )
}
