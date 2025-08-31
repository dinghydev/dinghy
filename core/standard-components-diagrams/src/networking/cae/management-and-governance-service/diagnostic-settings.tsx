import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGNOSTIC_SETTINGS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/LogDiagnostics.svg;strokeColor=none;',
  },
  _width: 45,
  _height: 50,
}

export function DiagnosticSettings(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGNOSTIC_SETTINGS}
      {...props}
      _style={extendStyle(DIAGNOSTIC_SETTINGS, props)}
    />
  )
}
