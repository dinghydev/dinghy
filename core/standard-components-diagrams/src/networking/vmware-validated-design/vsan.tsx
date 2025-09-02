import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VSAN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vsan;',
  },
  _original_width: 43.5,
  _original_height: 50,
}

export function Vsan(props: DiagramNodeProps) {
  return <Shape {...VSAN} {...props} _style={extendStyle(VSAN, props)} />
}
