import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOFTWARE_SYSTEM = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#1061B0;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#0D5091;metaEdit=1;resizable=0;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];',
  },
  _width: 0,
  _height: 120,
}

export function SoftwareSystem(props: NodeProps) {
  return (
    <Shape
      {...SOFTWARE_SYSTEM}
      {...props}
      _style={extendStyle(SOFTWARE_SYSTEM, props)}
    />
  )
}
