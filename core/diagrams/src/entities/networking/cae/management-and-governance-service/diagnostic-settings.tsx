import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGNOSTIC_SETTINGS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/LogDiagnostics.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function DiagnosticSettings(props: NodeProps) {
  return (
    <Shape
      {...DIAGNOSTIC_SETTINGS}
      {...props}
      _style={extendStyle(DIAGNOSTIC_SETTINGS, props)}
    />
  )
}
