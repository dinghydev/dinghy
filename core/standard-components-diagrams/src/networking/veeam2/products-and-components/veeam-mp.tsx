import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_MP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_mp;',
  },
  _width: 34,
  _height: 34,
}

export function VeeamMp(props: DiagramNodeProps) {
  return (
    <Shape {...VEEAM_MP} {...props} _style={extendStyle(VEEAM_MP, props)} />
  )
}
