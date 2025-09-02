import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLET_WINDOWS_7INCH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tablet_windows_7inch;',
  },
  _original_width: 34,
  _original_height: 47,
}

export function TabletWindows7inch(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLET_WINDOWS_7INCH}
      {...props}
      _style={extendStyle(TABLET_WINDOWS_7INCH, props)}
    />
  )
}
