import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAMZIP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeamzip;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function Veeamzip(props: DiagramNodeProps) {
  return (
    <Shape {...VEEAMZIP} {...props} _style={extendStyle(VEEAMZIP, props)} />
  )
}
