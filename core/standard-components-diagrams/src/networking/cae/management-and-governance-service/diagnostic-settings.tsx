import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAGNOSTIC_SETTINGS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/LogDiagnostics.svg;',
  _width: 45,
  _height: 50,
}

export function DiagnosticSettings(props: DiagramNodeProps) {
  return <Shape {...DIAGNOSTIC_SETTINGS} {...props} />
}
