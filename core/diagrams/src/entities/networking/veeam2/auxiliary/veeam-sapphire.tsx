import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEEAM_SAPPHIRE = {
  _style: {
    entity:
      'align=left;verticalAlign=middle;fontFamily=Tahoma;fillColor=#005f4b;strokeColor=none;fontColor=#ffffff;strokeWidth=2;html=1;whiteSpace=wrap;spacing=6;fontStyle=0',
  },
  _width: 150,
  _height: 110.00000000000001,
}

export function VeeamSapphire(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VEEAM_SAPPHIRE)} />
}
