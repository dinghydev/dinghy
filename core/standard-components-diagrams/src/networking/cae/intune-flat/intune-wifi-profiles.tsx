import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_WIFI_PROFILES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_wifi_profiles',
  },
  _width: 43,
  _height: 50,
}

export function IntuneWifiProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_WIFI_PROFILES}
      {...props}
      _style={extendStyle(INTUNE_WIFI_PROFILES, props)}
    />
  )
}
