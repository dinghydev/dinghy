import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUREBACKUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.surebackup;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function Surebackup(props: DiagramNodeProps) {
  return (
    <Shape {...SUREBACKUP} {...props} _style={extendStyle(SUREBACKUP, props)} />
  )
}
