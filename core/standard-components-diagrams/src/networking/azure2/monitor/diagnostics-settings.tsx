import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGNOSTICS_SETTINGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Diagnostics_Settings.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 67,
}

export function DiagnosticsSettings(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGNOSTICS_SETTINGS}
      {...props}
      _style={extendStyle(DIAGNOSTICS_SETTINGS, props)}
    />
  )
}
