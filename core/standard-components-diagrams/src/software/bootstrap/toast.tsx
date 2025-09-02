import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOAST = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFE0E0;html=1;whiteSpace=wrap;fillColor=#FEFEFE;fontColor=#212529;align=left;spacing=15;verticalAlign=bottom;',
  },
  _original_width: 0,
  _original_height: 80,
}

export function Toast(props: DiagramNodeProps) {
  return <Shape {...TOAST} {...props} _style={extendStyle(TOAST, props)} />
}
