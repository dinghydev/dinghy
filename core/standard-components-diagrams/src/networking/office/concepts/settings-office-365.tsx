import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SETTINGS_OFFICE_365 = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.settings_office_365;',
  _width: 48,
  _height: 48,
}

export function SettingsOffice365(props: DiagramNodeProps) {
  return (
    <Shape
      {...SETTINGS_OFFICE_365}
      {...props}
      _style={extendStyle(SETTINGS_OFFICE_365, props)}
    />
  )
}
