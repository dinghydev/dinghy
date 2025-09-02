import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_365 = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.office_365;',
  },
  _original_width: 101,
  _original_height: 61,
}

export function Office365(props: DiagramNodeProps) {
  return (
    <Shape {...OFFICE_365} {...props} _style={extendStyle(OFFICE_365, props)} />
  )
}
