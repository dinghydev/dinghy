import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_INSTALLED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.office_installed;',
  },
  _width: 58,
  _height: 48,
}

export function OfficeInstalled(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_INSTALLED}
      {...props}
      _style={extendStyle(OFFICE_INSTALLED, props)}
    />
  )
}
