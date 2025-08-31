import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_DX360 = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_dx360;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function IbmDx360(props: DiagramNodeProps) {
  return (
    <Shape {...IBM_DX360} {...props} _style={extendStyle(IBM_DX360, props)} />
  )
}
