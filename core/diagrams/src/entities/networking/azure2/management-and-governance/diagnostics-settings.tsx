import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGNOSTICS_SETTINGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Diagnostics_Settings.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 67,
}

export function DiagnosticsSettings(props: NodeProps) {
  return (
    <Shape
      {...DIAGNOSTICS_SETTINGS}
      {...props}
      _style={extendStyle(DIAGNOSTICS_SETTINGS, props)}
    />
  )
}
